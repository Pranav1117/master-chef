"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-[400px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md"
            value={user.email}
            name="email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            value={user.password}
            name="password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={() => signIn("google")}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-md"
        >
          Sign in with Google
        </button>
        <p className="text-black text-center mt-2">
          New Member?{" "}
          <Link href="/auth/signup" className="text-gray-500">
            {" "}
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
