import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopicView from "./components/TopicView";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import { mlTopics } from "./data/mlData";

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeTopic = mlTopics.find((t) => t.id === activeTopicId) || null;

  function handleSelectTopic(id: string) {
    setActiveTopicId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleHome() {
    setActiveTopicId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeTopicId={activeTopicId || ""}
        onSelectTopic={handleSelectTopic}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top navbar */}
        <header className="flex-shrink-0 h-14 bg-gray-950/95 backdrop-blur border-b border-gray-800/60 flex items-center gap-4 px-4 z-10">
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Home button */}
          <button
            onClick={handleHome}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Home</span>
          </button>

          {/* Divider */}
          {activeTopic && (
            <>
              <span className="text-gray-700">/</span>
              <div className="flex items-center gap-2 text-sm text-gray-300 min-w-0">
                <span>{activeTopic.emoji}</span>
                <span className="truncate font-medium">{activeTopic.title}</span>
              </div>
            </>
          )}

          {/* Search bar */}
          <div className="ml-auto">
            <SearchBar onNavigate={handleSelectTopic} />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            {activeTopic ? (
              <TopicView topic={activeTopic} />
            ) : (
              <HomePage onSelectTopic={handleSelectTopic} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
