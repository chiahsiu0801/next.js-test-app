import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus nam, soluta incidunt earum et quia, deleniti doloremque quam libero exercitationem fugiat est velit minus dolorum a cum aliquam facere.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}