import { useEffect } from "react";

function App() {
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      fetch("/api/access-check")
        .then(res => res.json())
        .then(data => console.log(`[${i + 1}]`, data))
        .catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">LucioAI Auth Test</h1>
        <p className="mt-4 text-gray-400">Firing 25 requests...</p>
      </div>
    </div>
  );
}

export default App;
