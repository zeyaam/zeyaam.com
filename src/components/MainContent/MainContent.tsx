import { WorkTimeline } from "./WorkTimeline";

interface PersonalInfo {
  name: string;
  location: string;
  greeting: string;
}

interface MainContentProps {
  personalInfo: PersonalInfo;
  workHistory: Array<{
    date: string;
    title: string;
    company: string;
    description: string;
  }>;
}

export const MainContent = ({ personalInfo, workHistory }: MainContentProps) => {
  return (
    <main className="flex-1 px-6 pt-6 lg:pt-[15vh] pb-8 lg:pr-6">
      {/* Desktop Greeting - Hidden on mobile */}
      <section className="hidden lg:block mb-12">
        <h1 className="text-5xl font-bold mb-4 text-white">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          {personalInfo.greeting}
        </p>
      </section>

      {/* Work History Timeline */}
      <WorkTimeline workHistory={workHistory} />
    </main>
  );
};