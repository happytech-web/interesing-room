import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div className="flex flex-col items-center">
      <form action={handleGithubLogin}>
        <button className="text-white bg-gray-600 p-3 rounded-2xl font-sans">Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
