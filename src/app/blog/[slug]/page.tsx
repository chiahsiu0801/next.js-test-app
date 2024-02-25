import Image from 'next/image';
import styles from './singlePost.module.css';

import PostUser from '@/components/postUser/postUser';

const getData = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if(!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function SinglePostPage({
  params
}: {
  params: {
    slug: string
  }
}) {

  const {slug} = params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        fill
        className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={50}
          height={50}
          className={styles.avatar} />
          <PostUser />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
}