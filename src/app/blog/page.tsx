import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

interface SearchParams {
  [key: string]: any;
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate: 3600}});

  if(!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function BlogPage({
  params,
  searchParams
}: {
  params: {
    slug: string
  },
  searchParams: SearchParams
}) {

  const posts = await getData();

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