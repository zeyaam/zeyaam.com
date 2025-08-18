import { Link } from "react-router-dom";

interface PersonalInfo {
  name: string;
  location: string;
  greeting: string;
}

interface SidebarProps {
  personalInfo: PersonalInfo;
}

export const Sidebar = ({ personalInfo }: SidebarProps) => {
  return (
    <div className="hidden lg:block lg:fixed lg:inset-0 lg:flex lg:justify-center lg:pointer-events-none">
      <div className="max-w-6xl w-full flex justify-end lg:pr-6">
        <aside className="lg:w-72 lg:h-[80vh] lg:mt-[10vh] lg:border-l lg:border-gray-700/50 py-6 pr-6 pl-8 mx-6 mb-6 lg:mx-0 lg:mb-0 lg:pointer-events-auto">
          {/* Profile Image */}
          <div 
            className="w-40 h-40 rounded-full mb-4 overflow-hidden"
            style={{ backgroundColor: "var(--avatar-bg)" }}
          >
            <img 
              src="/pic.jpeg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover transform translate-x-2 scale-110 grayscale contrast-110 brightness-90"
            />
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold text-white mb-2">
            {personalInfo.name}
          </h2>

          {/* Location */}
          <p className="text-gray-300 mb-6">
            {personalInfo.location}
          </p>

          {/* Navigation Links */}
          <div className="space-y-1">
            <Link
              to="/"
              className="block text-white font-semibold bg-gray-700/30 rounded px-3 py-1 text-lg transition-colors duration-200"
            >
              Resume
            </Link>
            {/* <Link
              to="/fragments"
              className="block text-gray-300 hover:text-white transition-colors duration-200 px-3 py-1 text-lg"
            >
              Fragments
            </Link> */}
          </div>
        </aside>
      </div>
    </div>
  );
};