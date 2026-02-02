import { useState } from "react";

export default function ProgressBar() {
  const [vals, setVals] = useState([0, 0, 0]);

  const update = (i, v) => {
    v = Math.max(0, Math.min(100, v));
    const copy = [...vals];
    copy[i] = v;
    setVals(copy);
  };

  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold text-center text-blue-600">
          Progress Tracker
        </h2>

        {vals.map((v, i) => (
          <input
            key={i}
            type="number"
            value={v}
            onChange={(e) => update(i, +e.target.value)}
            className="border w-full px-3 py-2 rounded"
          />
        ))}

        <div className="h-4 bg-gray-200 rounded overflow-hidden">
          <div
            className={`h-4 transition-all ${
              avg < 40
                ? "bg-red-500"
                : avg > 70
                  ? "bg-green-500"
                  : "bg-yellow-400"
            }`}
            style={{ width: `${avg}%` }}
          />
        </div>

        <p className="text-center font-semibold">{Math.round(avg)}%</p>
      </div>
    </div>
  );
}
