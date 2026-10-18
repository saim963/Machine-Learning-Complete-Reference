import { Topic } from "../data/mlData";
import SectionCard from "./SectionCard";

interface TopicViewProps {
  topic: Topic;
}

const gradientMap: Record<string, string> = {
  violet: "from-violet-600/20 via-violet-500/10 to-transparent",
  blue: "from-blue-600/20 via-blue-500/10 to-transparent",
  green: "from-green-600/20 via-green-500/10 to-transparent",
  orange: "from-orange-600/20 via-orange-500/10 to-transparent",
  purple: "from-purple-600/20 via-purple-500/10 to-transparent",
  pink: "from-pink-600/20 via-pink-500/10 to-transparent",
  teal: "from-teal-600/20 via-teal-500/10 to-transparent",
  yellow: "from-yellow-600/20 via-yellow-500/10 to-transparent",
  cyan: "from-cyan-600/20 via-cyan-500/10 to-transparent",
  red: "from-red-600/20 via-red-500/10 to-transparent",
  indigo: "from-indigo-600/20 via-indigo-500/10 to-transparent",
  amber: "from-amber-600/20 via-amber-500/10 to-transparent",
  lime: "from-lime-600/20 via-lime-500/10 to-transparent",
};

const titleGradient: Record<string, string> = {
  violet: "from-violet-300 to-violet-100",
  blue: "from-blue-300 to-blue-100",
  green: "from-green-300 to-green-100",
  orange: "from-orange-300 to-orange-100",
  purple: "from-purple-300 to-purple-100",
  pink: "from-pink-300 to-pink-100",
  teal: "from-teal-300 to-teal-100",
  yellow: "from-yellow-300 to-yellow-100",
  cyan: "from-cyan-300 to-cyan-100",
  red: "from-red-300 to-red-100",
  indigo: "from-indigo-300 to-indigo-100",
  amber: "from-amber-300 to-amber-100",
  lime: "from-lime-300 to-lime-100",
};

const badgeClass: Record<string, string> = {
  violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  green: "bg-green-500/20 text-green-300 border-green-500/30",
  orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  teal: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  red: "bg-red-500/20 text-red-300 border-red-500/30",
  indigo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  lime: "bg-lime-500/20 text-lime-300 border-lime-500/30",
};

export default function TopicView({ topic }: TopicViewProps) {
  const totalFormulas = topic.sections.reduce(
    (acc, s) => acc + (s.formulas?.length || 0),
    0
  );
  const totalKeyPoints = topic.sections.reduce(
    (acc, s) => acc + (s.keyPoints?.length || 0),
    0
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Topic Header */}
      <div className={`relative rounded-2xl bg-gradient-to-br ${gradientMap[topic.color]} border border-gray-800/60 p-8 mb-8 overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 text-9xl flex items-center justify-center select-none pointer-events-none">
          {topic.emoji}
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{topic.emoji}</span>
            <div>
              <h2 className={`text-3xl font-bold bg-gradient-to-r ${titleGradient[topic.color]} bg-clip-text text-transparent`}>
                {topic.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeClass[topic.color]}`}>
                  {topic.sections.length} Sections
                </span>
                {totalFormulas > 0 && (
                  <span className="text-xs px-3 py-1 rounded-full border border-gray-700/50 bg-gray-800/40 text-gray-400 font-medium">
                    {totalFormulas} Formulas
                  </span>
                )}
                {totalKeyPoints > 0 && (
                  <span className="text-xs px-3 py-1 rounded-full border border-gray-700/50 bg-gray-800/40 text-gray-400 font-medium">
                    {totalKeyPoints} Key Points
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section quick links */}
        <div className="flex flex-wrap gap-2 mt-4">
          {topic.sections.map((section, i) => (
            <a
              key={i}
              href={`#section-${topic.id}-${i}`}
              className="text-xs px-3 py-1.5 rounded-lg bg-gray-900/50 border border-gray-700/40 text-gray-400 hover:text-gray-200 hover:border-gray-600/60 transition-colors"
            >
              {i + 1}. {section.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {topic.sections.map((section, i) => (
          <div key={i} id={`section-${topic.id}-${i}`}>
            <SectionCard section={section} color={topic.color} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
