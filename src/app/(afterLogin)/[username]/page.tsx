import BackButton from "../_component/BackButton";
import Post from "../_component/Post";
import styles from "./profile.module.css";

export default function Profile() {
  const user = {
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={styles.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={styles.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
