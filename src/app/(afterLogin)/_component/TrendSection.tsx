"use client";

import { useSession } from "next-auth/react";
import Trend from "./Trend";
import styles from "./trendSection.module.css";
import { usePathname } from "next/navigation";

export default function TrendSection() {
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);

  if (pathname === "/explore") return null;

  if (session?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.trendBg}>
      <div className={styles.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
}
