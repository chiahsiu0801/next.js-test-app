import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

type PostUserProps = {
  userId: string | number;
}

// FETCH DATA WITH AN API
// const getData = async (userId: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});

//   if(!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }

const PostUser = async ({userId}: PostUserProps) => {

  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId.toString());

  return ( 
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.username}</span>
    </div>
   );
}
 
export default PostUser;