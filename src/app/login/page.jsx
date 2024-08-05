import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button className="text-white">Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
