"use client";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <div className="flex flex-col items-center">
      <form
        action={formAction}
        className="flex flex-col gap-3 bg-gray-700 p-6 w-1/2 rounded-lg"
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="p-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="p-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="password again"
          name="passwordRepeat"
          className="p-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="image url"
          name="img"
          className="p-2 rounded-xl"
        />
        <button className="text-white bg-blue-700 p-3 rounded-2xl shadow-xl">
          Register
        </button>
        <div className="text-white">{state?.error}</div>
        <div className="flex flex-col items-center">
          <Link href="/login" className="text-white font-sans">
            Have an account?<b className="underline">Login</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
