"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";

export default function AskQuestionForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),

          authorId: user.$id,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create question");
      }

      alert("Question created!");

      router.push("/questions");
    } catch (error) {
      console.error(error);
      alert("Failed to create question");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border p-3 text-black"
          placeholder="Enter question title"
        />
      </div>

      <div>
        <label className="block mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded border p-3 text-black"
          rows={8}
          placeholder="Describe your problem"
        />
      </div>

      <div>
        <label className="block mb-2">Tags</label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full rounded border p-3 text-black"
          placeholder="react,nextjs,typescript"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-purple-600 px-6 py-3 text-white"
      >
        Submit Question
      </button>
    </form>
  );
}
