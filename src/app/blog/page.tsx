import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

import { getPosts } from "@/lib/data";

interface SearchParams {
  [key: string]: any;
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate: 3600}});

//   if(!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }

export default async function BlogPage({
  params,
  searchParams
}: {
  params: {
    slug: string
  },
  searchParams: SearchParams
}) {

  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}