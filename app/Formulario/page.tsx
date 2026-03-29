"use client";

import { useState } from "react";

export default function FormularioPage() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    username: string;
    fullName: string;
    age: string;
  } | null>(null);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!username.trim() || !fullName.trim() || !age.trim()) {
      setError("Todos los campos son obligatorios.");
      setSubmittedData(null);
      return;
    }

    if (Number(age) < 1 || Number(age) > 100) {
      setError("La edad debe estar entre 1 y 100.");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData({
      username: username.trim().toUpperCase(),
      fullName: fullName.trim().toUpperCase(),
      age: age.trim(),
    });
  }

  return (
    <main className="min-h-screen bg-white px-4 py-14 text-black">
      <section className="mx-auto mt-6 max-w-5xl rounded-[28px] border-2 border-gray-500 bg-white p-10">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label
                htmlFor="username"
                className="mb-3 block text-[28px] font-bold leading-none"
              >
                Username:
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="h-11 w-full max-w-[300px] border border-gray-500 px-3 text-[20px]"
              />
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="mb-3 block text-[28px] font-bold leading-none"
              >
                FullName:
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="h-11 w-full max-w-[300px] border border-gray-500 px-3 text-[20px]"
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className="mb-3 block text-[28px] font-bold leading-none"
              >
                Age:
              </label>
              <input
                id="age"
                type="text"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                className="h-11 w-full max-w-[300px] border border-gray-500 px-3 text-[20px]"
              />
            </div>

            {error && <p className="text-lg text-red-600">{error}</p>}

            <button
              type="submit"
              className="border border-gray-500 bg-gray-100 px-4 py-2 text-[18px]"
            >
              Submit
            </button>
          </form>

          <aside className="pt-4 text-[24px]">
            {submittedData ? (
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  <span className="font-bold">UserName:</span>{" "}
                  {submittedData.username}
                </li>
                <li>
                  <span className="font-bold">FullName:</span>{" "}
                  {submittedData.fullName}
                </li>
                <li>
                  <span className="font-bold">Age:</span> {submittedData.age}
                </li>
              </ul>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}
