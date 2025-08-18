import { Link } from "react-router-dom";

const fragments = [
  {
    id: 1,
    date: "Aug 17, 2025",
    content: "Just discovered this amazing technique for optimizing React re-renders. The key is understanding when and why components update."
  },
  {
    id: 2,
    date: "Aug 15, 2025",
    content: "Coffee shops are the best co-working spaces. There's something about the ambient noise that helps me focus better than any quiet office."
  },
  {
    id: 3,
    date: "Aug 12, 2025",
    content: "Reading 'Clean Code' again. It's fascinating how the principles remain relevant even as technologies evolve."
  },
  {
    id: 4,
    date: "Aug 10, 2025",
    content: "The intersection of design and development is where the magic happens. Good code should be as elegant as good design."
  },
  {
    id: 5,
    date: "Aug 8, 2025",
    content: "Sometimes the best debugging technique is to step away from the computer and think through the problem on paper."
  }
];

export const Fragments = () => {
  return (
    <div className="min-h-screen relative z-10 px-6 py-8 max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 transition-colors duration-200"
        >
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold mb-4 text-white">Fragments</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Short thoughts, opinions, and experiences that don't warrant a full blog post.
        </p>
      </header>

      {/* Fragments List */}
      <main className="space-y-6">
        {fragments.map((fragment) => (
          <article 
            key={fragment.id} 
            className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-200"
          >
            <time className="text-sm text-gray-400 mb-3 block">
              {fragment.date}
            </time>
            <p className="text-gray-100 leading-relaxed">
              {fragment.content}
            </p>
          </article>
        ))}
      </main>

      {/* Footer note */}
      <footer className="mt-16 text-center">
        <p className="text-gray-400 text-sm">
          More fragments coming soon...
        </p>
      </footer>
    </div>
  );
};