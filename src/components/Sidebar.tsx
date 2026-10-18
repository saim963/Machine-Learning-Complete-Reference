import { mlTopics } from "../data/mlData";

interface SidebarProps {
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const colorMap: Record<string, string> = {
  violet: "text-violet-400 bg-violet-500/10 hover:bg-violet-500/20 border-violet-500/30",
  blue: "text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30",
  green: "text-green-400 bg-green-500/10 hover:bg-green-500/20 border-green-500/30",
  orange: "text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30",
  purple: "text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30",
  pink: "text-pink-400 bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/30",
  teal: "text-teal-400 bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/30",
  yellow: "text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/30",
  cyan: "text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30",
  red: "text-red-400 bg-red-500/10 hover:bg-red-500/20 border-red-500/30",
  indigo: "text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30",
  amber: "text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30",
  lime: "text-lime-400 bg-lime-500/10 hover:bg-lime-500/20 border-lime-500/30",
};

const activeColorMap: Record<string, string> = {
  violet: "bg-violet-500/25 border-violet-400 text-violet-300",
  blue: "bg-blue-500/25 border-blue-400 text-blue-300",
  green: "bg-green-500/25 border-green-400 text-green-300",
  orange: "bg-orange-500/25 border-orange-400 text-orange-300",
  purple: "bg-purple-500/25 border-purple-400 text-purple-300",
  pink: "bg-pink-500/25 border-pink-400 text-pink-300",
  teal: "bg-teal-500/25 border-teal-400 text-teal-300",
  yellow: "bg-yellow-500/25 border-yellow-400 text-yellow-300",
  cyan: "bg-cyan-500/25 border-cyan-400 text-cyan-300",
  red: "bg-red-500/25 border-red-400 text-red-300",
  indigo: "bg-indigo-500/25 border-indigo-400 text-indigo-300",
  amber: "bg-amber-500/25 border-amber-400 text-amber-300",
  lime: "bg-lime-500/25 border-lime-400 text-lime-300",
};

export default function Sidebar({ activeTopicId, onSelectTopic, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-72 bg-gray-950 border-r border-gray-800/60 flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-800/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-xl shadow-lg">
              🧠
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight">ML Guide</h1>
              <p className="text-gray-500 text-xs">Complete Reference</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-3 border-b border-gray-800/60">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-gray-900 rounded-lg p-2">
              <div className="text-violet-400 font-bold text-sm">{mlTopics.length}</div>
              <div className="text-gray-500 text-xs">Topics</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-2">
              <div className="text-blue-400 font-bold text-sm">
                {mlTopics.reduce((acc, t) => acc + t.sections.length, 0)}
              </div>
              <div className="text-gray-500 text-xs">Sections</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-2">
              <div className="text-green-400 font-bold text-sm">
                {mlTopics.reduce((acc, t) => acc + t.sections.reduce((a, s) => a + (s.formulas?.length || 0), 0), 0)}
              </div>
              <div className="text-gray-500 text-xs">Formulas</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1 scrollbar-thin">
          {mlTopics.map((topic) => {
            const isActive = topic.id === activeTopicId;
            const baseClass = isActive
              ? activeColorMap[topic.color]
              : colorMap[topic.color];

            return (
              <button
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic.id);
                  onClose();
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all duration-200 flex items-center gap-3 group ${baseClass}`}
              >
                <span className="text-lg">{topic.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{topic.title}</div>
                  <div className="text-xs opacity-60">{topic.sections.length} sections</div>
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800/60">
          <p className="text-xs text-gray-600 text-center">
            Complete ML Reference Guide 2024
          </p>
        </div>
      </aside>
    </>
  );
}
