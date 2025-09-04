import { Star } from 'lucide-react';

type Props = { label: number; count: number; total: number; active?: boolean }

function RatingRow({ label, count, total, active = false }: Props) {
  const pct = Math.round((count / Math.max(1, total)) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 text-sm flex items-center gap-1 font-medium text-gray-700">{label}<Star
            className={`shrink-0 fill-yellow-400 text-yellow-400 `}
            width={14}
            height={14}
          /></div>
      <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full ${active ? "bg-yellow-400" : "bg-gray-300"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="w-8 text-right text-sm text-gray-600">{count}</div>
    </div>
  );
}

export default RatingRow