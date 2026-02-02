import { useState } from "react";

export default function UserForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    id: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {
    let e = {};
    if (!data.name) e.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Invalid Email";
    if (!data.id) e.id = "ID required";
    if (!data.password) e.password = "Password required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(data);
    setData({ name: "", email: "", id: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-3"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">
          User Form
        </h2>

        {["name", "email", "id"].map((field) => (
          <div key={field}>
            <input
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              placeholder={field.toUpperCase()}
              value={data[field]}
              onChange={(e) => setData({ ...data, [field]: e.target.value })}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <div>
          <div className="flex">
            <input
              type={show ? "text" : "password"}
              className="w-full border px-3 py-2 rounded-l"
              placeholder="PASSWORD"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="bg-blue-500 text-white px-3 rounded-r"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>

        {submitted && (
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        )}
      </form>
    </div>
  );
}
