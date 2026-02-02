import { useState } from "react";

const names = [
  "Rakesh",
  "Rahul",
  "Raj",
  "Rohit",
  "Rani",
  "Rachana",
  "Nagaraju",
];

export default function SearchList() {
  const [q, setQ] = useState("");

  const res = names.filter((n) => n.toLowerCase().includes(q.toLowerCase()));

  const highlight = (text) => {
    if (!q) return text;
    return text.split(new RegExp(`(${q})`, "gi")).map((p, i) =>
      p.toLowerCase() === q.toLowerCase() ? (
        <b key={i} className="text-blue-600">
          {p}
        </b>
      ) : (
        p
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold text-center text-blue-600 mb-3">
          Live Search
        </h2>

        <input
          className="border w-full px-3 py-2 rounded mb-3"
          placeholder="Search name..."
          onChange={(e) => setQ(e.target.value)}
        />

        <p className="text-sm mb-2">Matches: {res.length}</p>

        {res.length === 0 && (
          <p className="text-red-500 text-sm">No matches found</p>
        )}

        <div className="space-y-1">
          {res.map((n) => (
            <div key={n}>{highlight(n)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
