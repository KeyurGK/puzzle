import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      fetch("/api/access-check", {
        method: "GET"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`Response ${i + 1}:`, data);
        })
        .catch((err) => console.error(`Error ${i + 1}:`, err));
    }
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
