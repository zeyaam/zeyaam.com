import { TimelineItem } from "./TimelineItem";

interface WorkItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface WorkTimelineProps {
  workHistory: WorkItem[];
}

export const WorkTimeline = ({ workHistory }: WorkTimelineProps) => {
  return (
    <section>
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-white">
        Professional Experience
      </h2>
      <div className="relative">
        {/* Timeline line - Hidden on mobile, visible on desktop */}
        <div
          className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: "var(--timeline-line)" }}
        ></div>

        {workHistory.map((work, index) => (
          <TimelineItem key={index} work={work} index={index} />
        ))}
      </div>
    </section>
  );
};