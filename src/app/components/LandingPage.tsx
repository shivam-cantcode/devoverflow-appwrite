import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Stars from "./stars";
import IconCloudDemo from "./IconCloudDemo";

export default function LandingPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="z-10 text-center">
        <h1
          className="
          text-7xl
          font-extrabold
          bg-gradient-to-r
          from-pink-500
          via-purple-500
          to-orange-400
          bg-clip-text
          text-transparent pr-52
        "
        >
          DevoverFlow
        </h1>

        <p className="mt-6 max-w-4xl text-xl text-gray-300 pr-40">
          Ask questions, share knowledge, and collaborate with developers
          worldwide.
        </p>

        <div className="mt-16  ml-10 flex  items-center gap-4 pl-32">
          <Link href="/login">
            <ShimmerButton>Getting Started</ShimmerButton>
          </Link>

          <Link href="/questions">
            <ShimmerButton>Browse Questions</ShimmerButton>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">Ask</h3>
            <p className="mt-2 text-gray-400">
              Get answers from experienced developers.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">Learn</h3>
            <p className="mt-2 text-gray-400">
              Discover solutions to real-world coding challenges.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">Share</h3>
            <p className="mt-2 text-gray-400">
              Help others by contributing your knowledge.
            </p>
          </div>
        </div>
      </div>

      <Stars />

      <IconCloudDemo />
    </section>
  );
}
