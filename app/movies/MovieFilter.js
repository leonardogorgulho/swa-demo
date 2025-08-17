"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieFilter() {
  const router = useRouter();
  const [year, setYear] = useState("");

  return (
    <div>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={() => router.push(`/movies?year=${year}`)}>
        Search
      </button>
    </div>
  );
}
