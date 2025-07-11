"use client";

import style from "./signup.module.css";
import BackButton from "./BackButton";
import signup from "../_lib/signup";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

function showMessage(message: string | null) {
  if (message === "아이디를 입력해주세요.") {
    return "아이디를 입력해주세요.";
  }

  if (message === "닉네임을 입력해주세요.") {
    return "닉네임을 입력해주세요.";
  }

  if (message === "비밀번호를 입력해주세요.") {
    return "비밀번호를 입력해주세요.";
  }

  if (message === "프로필 이미지를 선택해주세요.") {
    return "프로필 이미지를 선택해주세요.";
  }

  return "";
}

export default function SignupModal() {
  const [state, formAction] = useActionState(signup, { message: null });
  const { pending } = useFormStatus();

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <Form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  className={style.input}
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button
                type="submit"
                className={style.actionButton}
                disabled={pending}
              >
                가입하기
              </button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
