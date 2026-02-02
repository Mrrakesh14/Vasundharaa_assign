import { Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";
import UserForm from "./components/UserForm";
import ProgressBar from "./components/ProgressBar";
import CountdownTimer from "./components/CountdownTimer";
import SearchList from "./components/SearchList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/progress" element={<ProgressBar />} />
        <Route path="/timer" element={<CountdownTimer />} />
        <Route path="/search" element={<SearchList />} />
      </Routes>
    </div>
  );
}
