"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function loginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    // For demo, we just check if email and password are non-empty
    router.push("/dashboard");
  };

  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            className="w-full border p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            className="w-full border p-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded mb-4"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p>Don't have a account, let's create one for you</p>

          <button
            className="w-[50%] flex items-center justify-center bg-blue-500 text-white p-2 rounded mt-2"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
