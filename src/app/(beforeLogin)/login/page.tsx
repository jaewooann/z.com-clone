"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      router.replace("/home");
      return;
    }

    if (status === "unauthenticated") {
      router.replace("/i/flow/login");
    }
  }, [router, status, session]);

  return <Main />;
}
