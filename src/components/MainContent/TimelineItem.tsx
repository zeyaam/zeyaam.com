interface WorkItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineItemProps {
  work: WorkItem;
  index: number;
}

export const TimelineItem = ({ work, index }: TimelineItemProps) => {
  return (
    <div key={index} className="relative mb-6 lg:mb-8 lg:pl-16">
      {/* Desktop Timeline dot */}
      <div
        className="hidden lg:block absolute left-[25px] top-6 w-4 h-4 rounded-full border-4"
        style={{
          backgroundColor: "var(--timeline-dot)",
          borderColor: "var(--timeline-dot-border)",
        }}
      ></div>

      {/* Date - Above content on mobile, rotated on desktop */}
      <div className="lg:hidden flex items-center text-sm text-gray-400 mb-2 font-medium">
        <div
          className="w-3 h-3 rounded-full border-2 mr-2 flex-shrink-0"
          style={{
            backgroundColor: "var(--timeline-dot)",
            borderColor: "var(--timeline-dot-border)",
          }}
        ></div>
        {work.date}
      </div>
      <div className="hidden lg:block absolute left-0 bottom-0 text-xs text-gray-400 whitespace-nowrap -rotate-90 origin-top-left">
        {work.date}
      </div>

      {/* Content */}
      <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg lg:text-lg font-semibold text-white mb-2">
          {work.title} @ {work.company}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {work.description}
        </p>
      </div>
    </div>
  );
};