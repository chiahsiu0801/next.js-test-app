import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

interface SearchParams {
  [key: string]: any;
}

export default function BlogPage({
  params,
  searchParams
}: {
  params: {
    slug: string
  },
  searchParams: SearchParams
}) {

  console.log(searchParams);

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div> 
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}