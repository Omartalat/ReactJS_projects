import { useEffect, useState } from "react";

export default function App() {
  const [movieName, setMovieName] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<{
    Title?: string;
    Plot?: string;
    Poster?: string;
  } | null>(null);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = fd.get("movie-name");
    setMovieName(data as string);
  }

  useEffect(() => {
    if (!movieName) return;

    try {
      const apiKey = import.meta.env.VITE_OMDb_API;
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
        .then((response) => response.json())
        .then((data) => setMovieData(data));
    } catch (error) {
      console.error(error);
    }
  }, [movieName]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Movie Search Engine
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-8 w-full max-w-md">
        <input
          type="text"
          name="movie-name"
          placeholder="Write the movie name"
          aria-placeholder="Write the movie name"
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors font-semibold"
        >
          Search
        </button>
      </form>

      {movieData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">{movieData.Title}</h2>
          <p className="text-gray-300 mb-4">{movieData.Plot}</p>
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className="w-full rounded shadow-md"
          />
        </div>
      )}
    </div>
  );
}
