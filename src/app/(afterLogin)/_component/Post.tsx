import dayjs from "dayjs";
import styles from "./post.module.css";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/zlogo.png",
    },
    content: "Hello, world!",
    createdAt: "2021-01-01",
    Image: [],
  };
  return (
    <article className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link href={`/${target.User.id}`} className={styles.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={styles.postShade} />
          </Link>
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={styles.postUserName}>
                {target.User.nickname}
              </span>
              &nbsp;
              <span className={styles.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={styles.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          {/* <div className={styles.postImageSection}></div> */}
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
