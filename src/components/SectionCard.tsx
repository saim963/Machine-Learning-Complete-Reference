import { Section } from "../data/mlData";
import FormulaCard from "./FormulaCard";

interface SectionCardProps {
  section: Section;
  color: string;
  index: number;
}

const colorBadge: Record<string, string> = {
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

const colorDot: Record<string, string> = {
  violet: "bg-violet-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  orange: "bg-orange-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  teal: "bg-teal-400",
  yellow: "bg-yellow-400",
  cyan: "bg-cyan-400",
  red: "bg-red-400",
  indigo: "bg-indigo-400",
  amber: "bg-amber-400",
  lime: "bg-lime-400",
};

export default function SectionCard({ section, color, index }: SectionCardProps) {
  return (
    <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-gray-700/60 transition-colors duration-200">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-gray-800/40 flex items-center gap-3">
        <span className={`flex-shrink-0 w-7 h-7 rounded-lg border text-xs font-bold flex items-center justify-center ${colorBadge[color]}`}>
          {index + 1}
        </span>
        <h3 className="text-white font-semibold text-base">{section.title}</h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>

        {/* Formulas Grid */}
        {section.formulas && section.formulas.length > 0 && (
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>📐</span> Key Formulas
            </h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
              {section.formulas.map((formula, i) => (
                <FormulaCard key={i} formula={formula} color={color} />
              ))}
            </div>
          </div>
        )}

        {/* Table */}
        {section.table && (
          <div>
            <div className="overflow-x-auto rounded-xl border border-gray-800/60">
              <table className="w-full text-sm min-w-max">
                <thead>
                  <tr className="border-b border-gray-800/60 bg-gray-950/50">
                    {section.table.headers.map((header, i) => (
                      <th key={i} className="px-4 py-3 text-left text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className={`border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors ${
                        rowIdx % 2 === 0 ? "bg-gray-900/20" : "bg-gray-900/40"
                      }`}
                    >
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className={`px-4 py-3 ${cellIdx === 0 ? "text-gray-200 font-medium" : "text-gray-400"} text-xs leading-relaxed`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Code block */}
        {section.code && (
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>💻</span> Code Example
            </h4>
            <div className="bg-gray-950 rounded-xl border border-gray-800/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800/60 bg-gray-900/60">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-gray-500 font-mono">python</span>
              </div>
              <pre className="text-xs text-gray-300 font-mono p-4 overflow-x-auto leading-relaxed">
                <code>{section.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Key Points */}
        {section.keyPoints && section.keyPoints.length > 0 && (
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>✅</span> Key Points
            </h4>
            <div className="space-y-2">
              {section.keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${colorDot[color] || "bg-violet-400"}`} />
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
