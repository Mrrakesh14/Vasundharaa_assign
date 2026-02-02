import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-indigo-200 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        Vasundharaa Assignment
      </h1>

      <div className="flex gap-3">
        <Link to="/" className={linkClass("/")}>
          Todo
        </Link>
        <Link to="/form" className={linkClass("/form")}>
          Form
        </Link>
        <Link to="/progress" className={linkClass("/progress")}>
          Progress
        </Link>
        <Link to="/timer" className={linkClass("/timer")}>
          Timer
        </Link>
        <Link to="/search" className={linkClass("/search")}>
          Search
        </Link>
      </div>
    </nav>
  );
}
