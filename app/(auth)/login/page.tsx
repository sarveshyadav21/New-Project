"use client";
import{useState, useEffect} from "react";
import { useRouter } from "next/navigation";

export default function loginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const router = useRouter(); 
  const handleSubmit = () => {
    // For demo, we just check if email and password are non-empty
    router.push("/dashboard");
  }    
return(
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

        <button className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}>
          Login
        </button>

      </div>
    </div>
    
);




















}