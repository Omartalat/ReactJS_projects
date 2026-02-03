import { useEffect, useState } from "react";
import { type Movie } from "./types";
import AddMovieModal from "./components/AddMovieModal";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    setMovies(movies.filter((movie) => movie._id !== id));

    try {
      await fetch(`http://localhost:5000/api/movies/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete");
    }
  };

  const handleToggleWatched = async (id: string, currentStatus: boolean) => {
    setMovies(
      movies.map((movie) =>
        movie._id === id ? { ...movie, isWatched: !currentStatus } : movie,
      ),
    );

    try {
      await fetch(`http://localhost:5000/api/movies/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isWatched: !currentStatus }),
      });
    } catch (err) {
      console.error("Failed to update");
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies");
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieAdded = (newMovie: Movie) => {
    setMovies([newMovie, ...movies]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            🍿 My Watchlist
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            + Add Movie
          </button>
        </div>

        {loading && (
          <div className="text-center text-gray-400 animate-pulse mt-10">
            Loading your collection...
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-20 bg-gray-800/50 rounded-2xl border border-gray-700 border-dashed">
            <p className="text-xl text-gray-400">Your watchlist is empty.</p>
            <p className="text-sm text-gray-500 mt-2">
              Start searching to add movies!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group relative"
            >
              {/* DELETE BUTTON (Hidden by default, shows on hover) */}
              <button
                onClick={() => handleDelete(movie._id)}
                className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title="Delete Movie"
              >
                🗑️
              </button>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight">
                    {movie.title}
                  </h3>

                  {/* TOGGLE BADGE (Clickable now) */}
                  <button
                    onClick={() =>
                      handleToggleWatched(movie._id, movie.isWatched)
                    }
                    className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider transition-colors cursor-pointer border ${
                      movie.isWatched
                        ? "bg-green-900/40 text-green-400 border-green-700 hover:bg-green-900"
                        : "bg-yellow-900/40 text-yellow-400 border-yellow-700 hover:bg-yellow-900"
                    }`}
                  >
                    {movie.isWatched ? "✅ Watched" : "👀 To Watch"}
                  </button>
                </div>

                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                  {movie.description}
                </p>

                <div className="flex items-center space-x-1 text-yellow-500 pt-4 border-t border-gray-700/50">
                  <span>⭐</span>
                  <span className="font-semibold">{movie.rating}</span>
                  <span className="text-gray-600 text-xs">/ 10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AddMovieModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onMovieAdded={handleMovieAdded}
        />
      </div>
    </div>
  );
}

export default App;
