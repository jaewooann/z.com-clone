import { faker } from "@faker-js/faker";
import style from "./chatRoom.module.css";
import Link from "next/link";
import BackButton from "../../_component/BackButton";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import dayjs from "dayjs";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatPage() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };

  const messages = [
    {
      messageId: 1,
      roomId: 1,
      id: "zerocho",
      content: "안녕하세요",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 2,
      id: "hero",
      content: "안녕히가세요",
      createdAt: new Date(),
    },
  ];

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "zerocho") {
            // 내 메세지면
            return (
              <div className={style.myMessage} key={m.messageId}>
                {m.content}
              </div>
            );
          }
          return (
            <div className={style.yourMessage} key={m.messageId}>
              {m.content}
            </div>
          );
        })}
      </div>
    </main>
  );
}
