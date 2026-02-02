import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => {
      setTime((t) => (t > 0 ? t - 0.01 : 0));
    }, 10);
    return () => clearInterval(i);
  }, [running]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center space-y-4">
        <h2 className="text-xl font-bold text-blue-600">Countdown Timer</h2>

        <input
          disabled={running}
          type="number"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
          className="border w-full px-3 py-2 rounded text-center"
        />

        <div className="flex justify-between">
          <button
            onClick={() => setRunning(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
          <button
            onClick={() => setRunning(false)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Pause
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTime(10);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>

        <h3 className="text-3xl font-mono">{time.toFixed(2)}</h3>
      </div>
    </div>
  );
}
