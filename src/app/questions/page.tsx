import { databases, users } from "@/models/server/config";
import {
  answerCollection,
  db,
  voteCollection,
  questionCollection,
} from "@/models/name";
import { Query } from "node-appwrite";
import Link from "next/link";

import ShimmerButton from "@/components/magicui/shimmer-button";
import QuestionCard from "@/components/QuestionCard";
import Pagination from "@/components/Pagination";
import Search from "./Search";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    page?: string;
    tag?: string;
    search?: string;
  };
}) => {
  searchParams.page ||= "1";

  const queries = [
    Query.limit(25),
    Query.offset((+searchParams.page - 1) * 25),
  ];

  const questions = await databases.listDocuments(
    db,
    questionCollection,
    queries,
  );

  questions.documents = await Promise.all(
    questions.documents.map(async (ques: any) => {
      try {
        const [author, answers, votes] = await Promise.all([
          users.get(ques.authorId),
          databases.listDocuments(db, answerCollection, [
            Query.equal("questionId", ques.$id),
            Query.limit(1),
          ]),
          databases.listDocuments(db, voteCollection, [
            Query.equal("type", "question"),
            Query.equal("typeId", ques.$id),
            Query.limit(1),
          ]),
        ]);

        return {
          ...ques,
          totalAnswers: answers.total,
          totalVotes: votes.total,
          author: {
            $id: author.$id,
            name: author.name,
            reputation: (author.prefs as any)?.reputation || 0,
          },
        };
      } catch {
        const [answers, votes] = await Promise.all([
          databases.listDocuments(db, answerCollection, [
            Query.equal("questionId", ques.$id),
            Query.limit(1),
          ]),
          databases.listDocuments(db, voteCollection, [
            Query.equal("type", "question"),
            Query.equal("typeId", ques.$id),
            Query.limit(1),
          ]),
        ]);

        return {
          ...ques,
          totalAnswers: answers.total,
          totalVotes: votes.total,
          author: {
            $id: ques.authorId,
            name: "Unknown User",
            reputation: 0,
          },
        };
      }
    }),
  );

  return (
    <div className="container mx-auto px-4 pb-20 pt-36">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Questions</h1>

        <Link href="/questions/ask">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Ask a Question
            </span>
          </ShimmerButton>
        </Link>
      </div>

      <div className="mb-4">
        <Search />
      </div>

      <div className="mb-4">
        <p>{questions.total} questions</p>
      </div>

      <div className="mb-4 max-w-3xl space-y-6">
        {questions.documents.map((ques: any) => (
          <QuestionCard key={ques.$id} ques={ques} />
        ))}
      </div>

      <Pagination total={questions.total} limit={25} />
    </div>
  );
};

export default Page;
