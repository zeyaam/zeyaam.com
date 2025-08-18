interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Name with typewriter animation */}
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in" style={{ color: "#091625" }}>
          <span className="inline-block animate-typewriter-inverted">
            Hello and Welcome!
          </span>
        </h1>
      </div>
    </div>
  );
};