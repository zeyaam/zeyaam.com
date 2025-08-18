import { Link } from "react-router-dom";

interface PersonalInfo {
  name: string;
  location: string;
  greeting: string;
}

interface MobileSidebarProps {
  personalInfo: PersonalInfo;
}

export const MobileSidebar = ({ personalInfo }: MobileSidebarProps) => {
  return (
    <div className="lg:hidden bg-gray-800/30 backdrop-blur-md rounded-xl p-6 mx-6 mt-6 mb-6 border border-gray-700/50">
      {/* Profile Image */}
      <div 
        className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden"
        style={{ backgroundColor: "var(--avatar-bg)" }}
      >
        <img 
          src="/pic.jpeg" 
          alt={personalInfo.name}
          className="w-full h-full object-cover transform translate-x-2 scale-110 grayscale contrast-110 brightness-90"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-center text-white mb-2">
        {personalInfo.name}
      </h1>

      {/* Greeting */}
      <p className="text-center text-gray-300 leading-relaxed mb-4">
        {personalInfo.greeting}
      </p>

      {/* Location */}
      <p className="text-center text-gray-300 mb-4">
        {personalInfo.location}
      </p>

      {/* Navigation Links */}
      <div className="space-y-1">
        <Link
          to="/"
          className="block text-center text-white font-semibold bg-gray-700/30 rounded mx-auto px-3 py-1 text-lg transition-colors duration-200"
        >
          Resume
        </Link>
        {/* <Link
          to="/fragments"
          className="block text-center text-gray-300 hover:text-white transition-colors duration-200 px-3 py-1 text-lg"
        >
          Fragments
        </Link> */}
      </div>
    </div>
  );
};