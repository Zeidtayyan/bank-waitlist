"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [branch, setBranch] = useState("Abdoun");
  const [service, setService] = useState("Open Account");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("9:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  function handleBooking() {
    if (!name || !phone || !date) {
      alert("Please fill in all the fields");
      return;
    }
    const bookedSlots = [
      {branch: "Abdoun", date: "2026-11-15", timeSlot: "9:00 AM"},
      {branch: "Sweifieh", date: "2026-05-12", timeSlot: "11:00 AM"},
      {branch: "Shmeisani", date: "2026-07-20", timeSlot: "10:00 AM"}
      ];
    const isBooked = bookedSlots.some(s => 
      s.branch === branch && 
      s.date === date && 
      s.timeSlot === timeSlot
    );
  
    if (isBooked) {
      router.push(`/waitlist?name=${name}&phone=${phone}&branch=${branch}&service=${service}&date=${date}&timeSlot=${timeSlot}`);
    } else {
        router.push(`/confirmation?name=${name}&phone=${phone}&branch=${branch}&service=${service}&date=${date}&timeSlot=${timeSlot}`);
      }
  }
  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Book a Branch Appointment</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Branch</label>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full border border-blue-300 rounded-md p-2">
            <option>Abdoun</option>
            <option>Sweifieh</option>
            <option>Shmeisani</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Service</label>
          <select value={service} onChange={(e) => setService(e.target.value)} className="w-full border border-blue-300 rounded-md p-2">
            <option>Open Account</option>
            <option>Card Issue</option>
            <option>Loan Inquiry</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full border border-blue-300 rounded-md p-2"></input>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Select a Time Slot</label>
          <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="w-full border border-blue-300 rounded-md p-2">
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please Enter Your Full Name" className="w-full border border-blue-300 rounded-md p-2"></input>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Please Enter Your Phone Number" className="w-full border border-blue-300 rounded-md p-2"></input>
        </div>
        <button onClick={handleBooking} className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Book Appointment</button>
      </div>
    </div>
  );
}