"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

// 회원가입 액션
const signup = async (
  prevState: { message: string | null } | undefined,
  formData: FormData
) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "아이디를 입력해주세요." };
  }

  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "닉네임을 입력해주세요." };
  }

  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "비밀번호를 입력해주세요." };
  }

  if (!formData.get("image")) {
    return { message: "프로필 이미지를 선택해주세요." };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );

    if (response.status === 403) {
      return { message: "이미 존재하는 아이디입니다." };
    }
    console.log(await response.json());
    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get("id") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
  } catch (err) {
    console.error(err);
    return { message: "서버 오류가 발생했습니다." };
  }

  if (shouldRedirect) {
    redirect("/home"); // try/catch문 안에서 redirect 사용하면 안 됨.
  }

  return { message: null };
};

export default signup;
