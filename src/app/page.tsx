import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold mb-6">Devoverflow</h1>

      <p className="max-w-2xl text-xl text-muted-foreground mb-10">
        Ask questions, share knowledge, and learn from developers around the
        world.
      </p>

      <div className="flex gap-4">
        <Link href="/questions">
          <ShimmerButton>Browse Questions</ShimmerButton>
        </Link>

        <Link href="/register">
          <button className="rounded-lg border px-6 py-3">Get Started</button>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div>
          <h3 className="text-xl font-semibold">Ask</h3>
          <p>Get answers from experienced developers.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Learn</h3>
          <p>Discover solutions to real-world coding problems.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Share</h3>
          <p>Help others by contributing your knowledge.</p>
        </div>
      </div>
    </main>
  );
}
