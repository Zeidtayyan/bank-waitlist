"use client";
import { useState } from "react";
export default function Admin() {
    const [appointments, setAppointments] = useState([
        {id: 1, name: "Sara Ahmed", phone: "0789999012", branch: "Abdoun", service: "Loan Inquiry", date: "26-06-2026", timeSlot: "10:00 AM", status: "Booked"},
        {id: 2, name: "Yousef Murad", phone: "0795126432", branch: "Shmeisani", service: "Open Account", date: "01-07-2026", timeSlot: "9:00 AM", status: "Booked"},
        {id:3, name: "Zaid Madamgha", phone: "0797039099", branch: "Sweifieh", service: "Card Issue", date: "05-07-2026", timeSlot: "11:00 AM", status: "Booked"},
    ]);
    const waitlist = [
        {id: 1, name: "Zain Sinokrot", phone: "0792224660", branch: "Abdoun", service: "Open Account", date: "01-07-2026", timeSlot: "12:00 PM"},
        {id: 2, name: "Mustafa Abukhas", phone: "0795460790", branch: "Sweifieh", service: "Loan Inquiry", date: "27-06-2026", timeSlot: "10:00 AM"},
        {id: 3, name: "Hamzeh Kasim", phone: "0775656666", branch: "Abdoun", service: "Card Issue", date: "30-06-2026", timeSlot: "9:00 AM"},
    ];
    function markAsNoShow(id) {
        setAppointments(appointments.map((ap) => 
            ap.id === id ? {...ap, status: "No Show"} : ap
        ));
    }
    return(
        <div className="min-h-screen bg-blue-200 flex justify-center py-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl text-gray-800">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
                <div className="flex gap-6">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1">Appointments</h2>
                        {appointments.map((ap) => (
                        <div key={ap.id} className="border border-gray-200 rounded-md p-4 mb-3">
                            <p><span className="font-medium">Name:</span> {ap.name}</p>
                            <p><span className="font-medium">Phone:</span> {ap.phone}</p>
                            <p><span className="font-medium">Branch:</span> {ap.branch}</p>
                            <p><span className="font-medium">Service:</span> {ap.service}</p>
                            <p><span className="font-medium">Date:</span> {ap.date}</p>
                            <p><span className="font-medium">Time:</span> {ap.timeSlot}</p>
                            <p><span className="font-medium">Status:</span> {ap.status}</p>
                            <button onClick={() => markAsNoShow(ap.id)} className="mt-3 w-full bg-red-500 text-white py-1 rounded-md text-sm font-semibold hover:bg-red-600">Mark as no show</button>
                        </div>
                        ))}
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1">Waitlist</h2>
                        {waitlist.map((wl) => (
                        <div key={wl.id} className="border border-gray-200 rounded-md p-4 mb-3">
                            <p><span className="font-medium">Name:</span> {wl.name}</p>
                            <p><span className="font-medium">Phone:</span> {wl.phone}</p>
                            <p><span className="font-medium">Branch:</span> {wl.branch}</p>
                            <p><span className="font-medium">Service:</span> {wl.service}</p>
                            <p><span className="font-medium">Date:</span> {wl.date}</p>
                            <p><span className="font-medium">Time:</span> {wl.timeSlot}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}