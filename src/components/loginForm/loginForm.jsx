"use client";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  return (
    <form action={formAction} className="flex flex-col gap-3 p-3">
      <div className="text-white font-sans bg-sky-600 p-3 rounded-lg">
        using Interest Room Account
      </div>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="rounded-lg p-3"
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        className="rounded-lg p-3"
      />
      <button className="text-white bg-blue-600 rounded-2xl p-3">Login</button>
      <div className="text-white">{state?.error}</div>
      <Link href="/register" className="text-white font-sans">
        {"Don't have an account? "}
        <b className="underline">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
