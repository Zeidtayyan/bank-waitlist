const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let appointments = [];
let waitlist = [];
app.post("/appointments", (req, res) => {
    const {name, phone, branch, service, date, timeSlot} = req.body;
    const newAppointment = {
        id: appointments.length + 1,
        name,
        phone,
        branch,
        service,
        date,
        timeSlot,
        status: "Booked"
    };
    appointments.push(newAppointment);
    res.json({message: "Appointment booked successfully", appointment: newAppointment});
})
app.get("/appointments", (req, res) => {
    res.json(appointments);
})
app.post("/waitlist", (req, res) => {
    const {name, phone ,branch, service, date, timeSlot} = req.body;
    const newEntry = {
        id: waitlist.length + 1,
        name,
        phone,
        branch,
        service,
        date,
        timeSlot
    };
    waitlist.push(newEntry);
    res.json({message: "Added to waitlist successfully", entry: newEntry});
})
app.get("/waitlist", (req, res) => {
    res.json(waitlist);
})
app.patch("/appointments/:id/noshow", (req, res) => {
    const id = parseInt(req.params.id);
    appointments = appointments.map((ap) => 
        ap.id === id ? {...ap, status : "No-Show"} : ap
    );
    res.json({message: "Marked as No-Show"});
})
app.listen(8000, () => {
    console.log("Backend running on port 8000");
})

