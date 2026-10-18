import { mlTopics } from "../data/mlData";

interface HomePageProps {
  onSelectTopic: (id: string) => void;
}

const colorCard: Record<string, string> = {
  violet: "border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/5",
  blue: "border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/5",
  green: "border-green-500/30 hover:border-green-500/60 hover:bg-green-500/5",
  orange: "border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-500/5",
  purple: "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5",
  pink: "border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/5",
  teal: "border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-500/5",
  yellow: "border-yellow-500/30 hover:border-yellow-500/60 hover:bg-yellow-500/5",
  cyan: "border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5",
  red: "border-red-500/30 hover:border-red-500/60 hover:bg-red-500/5",
  indigo: "border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/5",
  amber: "border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/5",
  lime: "border-lime-500/30 hover:border-lime-500/60 hover:bg-lime-500/5",
};

const colorTitle: Record<string, string> = {
  violet: "text-violet-300",
  blue: "text-blue-300",
  green: "text-green-300",
  orange: "text-orange-300",
  purple: "text-purple-300",
  pink: "text-pink-300",
  teal: "text-teal-300",
  yellow: "text-yellow-300",
  cyan: "text-cyan-300",
  red: "text-red-300",
  indigo: "text-indigo-300",
  amber: "text-amber-300",
  lime: "text-lime-300",
};

const colorBadge: Record<string, string> = {
  violet: "bg-violet-500/20 text-violet-400",
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-green-500/20 text-green-400",
  orange: "bg-orange-500/20 text-orange-400",
  purple: "bg-purple-500/20 text-purple-400",
  pink: "bg-pink-500/20 text-pink-400",
  teal: "bg-teal-500/20 text-teal-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  red: "bg-red-500/20 text-red-400",
  indigo: "bg-indigo-500/20 text-indigo-400",
  amber: "bg-amber-500/20 text-amber-400",
  lime: "bg-lime-500/20 text-lime-400",
};

const totalFormulas = mlTopics.reduce(
  (acc, t) => acc + t.sections.reduce((a, s) => a + (s.formulas?.length || 0), 0),
  0
);
const totalSections = mlTopics.reduce((acc, t) => acc + t.sections.length, 0);
const totalKeyPoints = mlTopics.reduce(
  (acc, t) => acc + t.sections.reduce((a, s) => a + (s.keyPoints?.length || 0), 0),
  0
);

export default function HomePage({ onSelectTopic }: HomePageProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-sm text-violet-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Complete Revision Guide · 2024 Edition
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Machine Learning
          <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Reference
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to master ML — from mathematical foundations and classical algorithms
          to deep learning, NLP, and production deployment. The ultimate revision resource.
        </p>

        {/* Global stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { value: mlTopics.length, label: "Topics", color: "text-violet-400", emoji: "📚" },
            { value: totalSections, label: "Sections", color: "text-blue-400", emoji: "📖" },
            { value: totalFormulas, label: "Formulas", color: "text-green-400", emoji: "📐" },
            { value: totalKeyPoints, label: "Key Points", color: "text-orange-400", emoji: "✅" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900/80 border border-gray-800/60 rounded-2xl px-6 py-4 text-center min-w-[100px]">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-12">
        {mlTopics.map((topic) => {
          const totalF = topic.sections.reduce((a, s) => a + (s.formulas?.length || 0), 0);
          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`text-left p-5 rounded-2xl border bg-gray-900/50 transition-all duration-200 group ${colorCard[topic.color]}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {topic.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold text-base mb-1 ${colorTitle[topic.color]}`}>
                    {topic.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorBadge[topic.color]}`}>
                      {topic.sections.length} sections
                    </span>
                    {totalF > 0 && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-800/60 text-gray-400">
                        {totalF} formulas
                      </span>
                    )}
                  </div>
                  <div className="mt-3 space-y-1">
                    {topic.sections.slice(0, 3).map((s, i) => (
                      <p key={i} className="text-xs text-gray-500 truncate">
                        • {s.title}
                      </p>
                    ))}
                    {topic.sections.length > 3 && (
                      <p className="text-xs text-gray-600">
                        +{topic.sections.length - 3} more...
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <span className={`text-xs font-medium flex items-center gap-1 ${colorTitle[topic.color]} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Explore →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Reference Footer */}
      <div className="border border-gray-800/60 rounded-2xl p-6 mb-8 bg-gray-900/40">
        <h3 className="text-gray-300 font-semibold mb-4 text-center">🚀 Recommended Study Path</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "🧠 Fundamentals",
            "→ 📐 Math",
            "→ 🎯 Supervised",
            "→ 🔍 Unsupervised",
            "→ 🕸️ Neural Nets",
            "→ 🔮 Deep Learning",
            "→ 💬 NLP",
            "→ 📊 Evaluation",
            "→ ⚙️ Features",
            "→ 🚀 MLOps",
          ].map((step, i) => (
            <span key={i} className="text-xs text-gray-400 bg-gray-800/60 border border-gray-700/40 rounded-lg px-3 py-1.5">
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
