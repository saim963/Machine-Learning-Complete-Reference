import { useState, useEffect, useRef } from "react";
import { mlTopics } from "../data/mlData";

interface SearchResult {
  topicId: string;
  topicTitle: string;
  topicEmoji: string;
  sectionTitle: string;
  sectionIndex: number;
  preview: string;
}

interface SearchBarProps {
  onNavigate: (topicId: string) => void;
}

function highlight(text: string, query: string): string {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 80) + (text.length > 80 ? "..." : "");
  const start = Math.max(0, idx - 30);
  const end = Math.min(text.length, idx + query.length + 50);
  return (start > 0 ? "..." : "") + text.slice(start, end) + (end < text.length ? "..." : "");
}

export default function SearchBar({ onNavigate }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    for (const topic of mlTopics) {
      for (let i = 0; i < topic.sections.length; i++) {
        const section = topic.sections[i];
        const searchable = [
          section.title,
          section.content,
          ...(section.keyPoints || []),
          ...(section.formulas?.map((f) => f.name + " " + f.description) || []),
        ].join(" ");

        if (searchable.toLowerCase().includes(q)) {
          found.push({
            topicId: topic.id,
            topicTitle: topic.title,
            topicEmoji: topic.emoji,
            sectionTitle: section.title,
            sectionIndex: i,
            preview: highlight(searchable, query),
          });
          if (found.length >= 8) break;
        }
      }
      if (found.length >= 8) break;
    }

    setResults(found);
    setIsOpen(found.length > 0);
    setSelectedIdx(0);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (results[selectedIdx]) {
        onNavigate(results[selectedIdx].topicId);
        setQuery("");
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Search topics, algorithms, formulas..."
          className="w-full bg-gray-900 border border-gray-700/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 z-50 bg-gray-900 border border-gray-700/60 rounded-xl shadow-2xl overflow-hidden">
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => {
                onNavigate(result.topicId);
                setQuery("");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-b border-gray-800/40 last:border-0 ${
                i === selectedIdx ? "bg-violet-500/10" : "hover:bg-gray-800/40"
              }`}
            >
              <span className="text-lg flex-shrink-0 mt-0.5">{result.topicEmoji}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs text-gray-500">{result.topicTitle}</span>
                  <span className="text-gray-700">›</span>
                  <span className="text-xs font-medium text-gray-300 truncate">{result.sectionTitle}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{result.preview}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
