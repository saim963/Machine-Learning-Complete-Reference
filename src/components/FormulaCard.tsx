import { Formula } from "../data/mlData";

interface FormulaCardProps {
  formula: Formula;
  color: string;
}

const colorAccents: Record<string, string> = {
  violet: "border-violet-500/40 bg-violet-500/5",
  blue: "border-blue-500/40 bg-blue-500/5",
  green: "border-green-500/40 bg-green-500/5",
  orange: "border-orange-500/40 bg-orange-500/5",
  purple: "border-purple-500/40 bg-purple-500/5",
  pink: "border-pink-500/40 bg-pink-500/5",
  teal: "border-teal-500/40 bg-teal-500/5",
  yellow: "border-yellow-500/40 bg-yellow-500/5",
  cyan: "border-cyan-500/40 bg-cyan-500/5",
  red: "border-red-500/40 bg-red-500/5",
  indigo: "border-indigo-500/40 bg-indigo-500/5",
  amber: "border-amber-500/40 bg-amber-500/5",
  lime: "border-lime-500/40 bg-lime-500/5",
};

const textColors: Record<string, string> = {
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

export default function FormulaCard({ formula, color }: FormulaCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${colorAccents[color] || colorAccents.violet}`}>
      <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${textColors[color] || textColors.violet}`}>
        {formula.name}
      </div>
      <div className="font-mono text-sm text-gray-100 bg-gray-950/60 rounded-lg px-4 py-3 mb-2 overflow-x-auto whitespace-nowrap border border-gray-800/50 leading-relaxed">
        {formula.latex}
      </div>
      <p className="text-gray-400 text-xs leading-relaxed">{formula.description}</p>
    </div>
  );
}
