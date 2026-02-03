import { useEffect, useState } from "react";
import { type Movie } from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            🍿 My Watchlist
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            + Add Movie
          </button>
        </div>

        {/* Loading & Error States */}
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

        {/* Empty State */}
        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-20 bg-gray-800/50 rounded-2xl border border-gray-700 border-dashed">
            <p className="text-xl text-gray-400">Your watchlist is empty.</p>
            <p className="text-sm text-gray-500 mt-2">
              Start searching to add movies!
            </p>
          </div>
        )}

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                    {movie.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider ${
                      movie.isWatched
                        ? "bg-green-900/60 text-green-400 border border-green-700"
                        : "bg-yellow-900/60 text-yellow-400 border border-yellow-700"
                    }`}
                  >
                    {movie.isWatched ? "Watched" : "Queued"}
                  </span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                  {movie.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <span>⭐</span>
                    <span className="font-semibold">{movie.rating}</span>
                    <span className="text-gray-600 text-xs">/ 10</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Added {new Date(movie.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
