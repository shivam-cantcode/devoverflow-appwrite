import QuestionForm from "@/components/QuestionForm";

export default function AskQuestionPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pt-36 pb-20">
      <h1 className="mb-8 text-4xl font-bold">Ask a Question</h1>

      <QuestionForm />
    </div>
  );
}
