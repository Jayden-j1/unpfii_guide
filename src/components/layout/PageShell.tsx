import type { PropsWithChildren, ReactNode } from 'react';
import { APP_TITLE } from '../../lib/constants';

type PageShellProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  action?: ReactNode;
}>;

export function PageShell({ title, subtitle, action, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {APP_TITLE}
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base mx-auto">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {action ? <div>{action}</div> : null}
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}