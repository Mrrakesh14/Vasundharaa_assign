import { useEffect, useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false, priority }]);
    setText("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggle = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

  const filtered = tasks.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.completed : t.completed,
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Todo App
        </h2>

        {/* Input Row */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task..."
          />

          <select
            className="border rounded px-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Filter */}
        <div className="flex justify-between mb-3">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded border"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggle(t.id)}
                />
                <span
                  className={`${
                    t.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {t.text}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    t.priority === "High"
                      ? "bg-red-200 text-red-700"
                      : t.priority === "Medium"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-green-200 text-green-700"
                  }`}
                >
                  {t.priority}
                </span>
              </div>

              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
