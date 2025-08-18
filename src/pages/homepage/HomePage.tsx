import { useEffect } from "react";
import { MainContent } from "../../components/MainContent/MainContent";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { MobileSidebar } from "../../components/Sidebar/MobileSidebar";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";
import { useAssetLoader } from "../../hooks/useAssetLoader";

const personalInfo = {
  name: "Zeyaam Shahid",
  location: "🇺🇸  Arlington, Virginia",
  greeting:
    "Welcome to my digital space. Here you'll find my professional journey, thoughts, and experiences in software development.",
};

const workHistory = [
  {
    date: "Jul 2024 - Present",
    title: "Software Development Engineer II",
    company: "Amazon Web Services (AWS)",
    description:
      "• Design and maintain Tier-1 EC2 VPC Control Plane Networking Services\n• Support migration to cells-based architecture for scalability\n• Implement networking components for multicard instances (p5/p6)\n• Support cutting-edge HPC and AI/ML workloads",
  },
  {
    date: "Aug 2019 - Jun 2024",
    title: "Senior Financial Technology Consultant",
    company: "EY",
    description:
      "• Led quantitative model execution platforms for financial institutions\n• Developed virtual healthcare solutions serving 10K+ patients daily\n• Built GenAI unit test generation tools using LangChain\n• Designed prompt engineering solutions for comprehensive test suites",
  },
];

export const HomePage = () => {
  // Toggle this to disable loading animation during development
  const SHOW_LOADING_ANIMATION = true;
  
  // Check if this is the initial load (synchronously)
  const hasLoadedBefore = sessionStorage.getItem('homepageLoaded') === 'true';

  const { isLoading } = useAssetLoader({
    images: ['/pic.jpeg'],
    minimumLoadTime: 3500
  });

  useEffect(() => {
    // Once loading is complete, mark as loaded for this session
    if (!isLoading && SHOW_LOADING_ANIMATION && !hasLoadedBefore) {
      sessionStorage.setItem('homepageLoaded', 'true');
    }
  }, [isLoading, SHOW_LOADING_ANIMATION, hasLoadedBefore]);

  // Only show loading on first visit in this session
  const showLoading = SHOW_LOADING_ANIMATION && isLoading && !hasLoadedBefore;

  return (
    <>
      <LoadingScreen isLoading={showLoading} />
      
      <div className={`min-h-screen relative z-10 transition-opacity duration-500 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Mobile Sidebar - Top on mobile */}
        <MobileSidebar personalInfo={personalInfo} />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto lg:flex">
          <MainContent personalInfo={personalInfo} workHistory={workHistory} />

          {/* Sidebar Spacer */}
          <div className="hidden lg:block lg:w-72 lg:flex-shrink-0 lg:ml-8"></div>
        </div>

        {/* Desktop Floating Sidebar */}
        <Sidebar personalInfo={personalInfo} />
      </div>
    </>
  );
};