import { handleGithubLogin } from "@/lib/action";

export default async function LoginPage() {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
}