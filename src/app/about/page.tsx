import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
    </div>
  );
}