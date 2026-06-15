"use client";

import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "docker",
  "github",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
];

export default function IconCloudDemo() {
  return (
    <div className="w-[500px] h-[500px]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
