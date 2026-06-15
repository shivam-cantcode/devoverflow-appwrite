"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/Auth";

export default function AuthInit() {
  const verifySession = useAuthStore((state) => state.verfiySession);

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  return null;
}
