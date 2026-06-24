"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    function handleLogin() {
        if (userName !== "admin" || password !== "1234") {
            alert ("Please try again!");
            return;
        }
        router.push("/admin");
    }

    return(
        <div className="h-screen bg-blue-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-800">
                <h1 className="text-2xl font-bold text-center mb-6 ">Welcome! Please login to your account</h1>
                 <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Enter your username</label>
                    <input 
                    type="text" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    className="w-full border border-blue-300 rounded-md p-2"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Enter your password</label>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full border border-blue-300 rounded-md p-2 mb-4"></input>
                    <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 ">Login</button>
                </div>

            </div>
        </div>
    )
}