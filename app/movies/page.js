import MovieFilter from "./MovieFilter";

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

export default async function MoviesPage({ searchParams }) {
  const year = searchParams.year || "";

  const res = await fetch(`http://localhost:3000/api/movies?year=${year}`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div>
      <MovieFilter />
      {data?.map((movie) => (
        <div key={movie._id}>
          {movie.title} ({year || "N/A"})
        </div>
      ))}
    </div>
  );
}
