import { Link } from 'react-router-dom';
import type { NavItem } from '../../data/types';

export function HomeNavCard({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.to}
      className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
        {item.title}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        {item.description}
      </p>
    </Link>
  );
}