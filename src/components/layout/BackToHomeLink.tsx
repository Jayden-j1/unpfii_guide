import { Link } from 'react-router-dom';

export function BackToHomeLink() {
  return (
    <div className="mb-6">
      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
      >
        ← Back to Home
      </Link>
    </div>
  );
}