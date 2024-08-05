import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, login } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-gray-700 p-5 w-1/3 rounded-2xl gap-5">
        <form action={handleGithubLogin}>
          <button className="text-white bg-gray-900 p-3 rounded-2xl font-sans w-full">
            Login with Github
          </button>
        </form>
        <hr className="border-white"/>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
