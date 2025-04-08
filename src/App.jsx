import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    fetch("https://workwithus.lucioai.com/access-check", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2V5dXIgRyBLdWxrYXJuaSIsImVtYWlsIjoia3Vsa2FybmlrZXl1ci5nQGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA0LTA4IDE0OjAwOjQ5In0.8cq59mJbRmHvS4L4OF50zggKepn39uYR6wBQ9rrVV2M",
        "Origin": "https://lucioai.com",
        "Referer": "https://lucioai.com/",
      },
      body: JSON.stringify({ name: "mr_robot" })
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">LucioAI Auth Test</h1>
        <p className="mt-4 text-gray-400">Sending request to the bouncer...</p>
      </div>
    </div>
  );
}

export default App;
