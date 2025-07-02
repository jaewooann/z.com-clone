"use client";

import { useRouter } from "next/navigation";
import styles from "./post.module.css";

interface PostArticleProps {
  children: React.ReactNode;
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    content: string;
    createdAt: Date;
    Images: any[];
  };
}

export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={styles.post}>
      {children}
    </article>
  );
}
