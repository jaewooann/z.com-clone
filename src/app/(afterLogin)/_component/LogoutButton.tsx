"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./logoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  console.log("me", me);

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
