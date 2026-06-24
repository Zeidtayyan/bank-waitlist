"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Waitlist() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const phone = searchParams.get("phone");
    const branch = searchParams.get("branch");
    const service = searchParams.get("service");
    const date = searchParams.get("date");
    const timeSlot = searchParams.get("timeSlot");
    const router = useRouter();
    return(
        <div className="min-h-screen bg-blue-200 flex items-center justify-center py-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-800">
                <h1 className="text-3xl font-bold text-center mb-6">You are on the waiting list!</h1>
                <div className="flex flex-col gap-3">
                    <p><span className="font-medium">Name:</span> {name}</p>
                    <p><span className="font-medium">Phone:</span> {phone}</p>
                    <p><span className="font-medium">Branch:</span> {branch}</p>
                    <p><span className="font-medium">Service:</span> {service}</p>
                    <p><span className="font-medium">Date:</span> {date}</p>
                    <p><span className="font-medium">TimeSlot:</span> {timeSlot}</p>
                    <button onClick={() => router.push("/")} className="w-full mt-6 bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800">Find a new booking</button>
                </div>
            </div>
        </div>
    )
}