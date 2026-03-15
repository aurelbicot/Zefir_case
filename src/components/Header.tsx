type MainTab = 'seller' | 'buyer'

interface HeaderProps {
  mainTab: MainTab
  onMainTabChange: (t: MainTab) => void
}

export function Header({ mainTab, onMainTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 md:px-8">
        <h1 className="text-xl font-semibold text-[var(--zefir)] tracking-tight">
          Zefir Growth Ops Case
        </h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Seller funnel optimization, CRM acceleration, and Buyer → Seller experimentation
        </p>
        <div className="mt-3 rounded-lg border border-[var(--zefir)]/20 bg-[var(--zefir-muted)] px-4 py-2.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mb-1.5">Executive summary</p>
          <ul className="text-sm text-gray-700 space-y-0.5 list-disc pl-4">
            <li>Seller growth is primarily constrained <strong className="font-semibold text-gray-800">before</strong> lead creation, not after.</li>
            <li>In the short term, the highest-priority CRM levers are <strong className="font-semibold text-gray-800">webform abandonment recovery</strong> and <strong className="font-semibold text-gray-800">hot-intent acceleration</strong>.</li>
            <li>In parallel, Buyer → Seller should be tested as a <strong className="font-semibold text-gray-800">holdout-based experiment</strong> to validate whether it can become an incremental Seller acquisition channel.</li>
          </ul>
        </div>
        <nav className="flex gap-1 mt-4 border-b border-gray-200 -mb-px">
          <button
            type="button"
            onClick={() => onMainTabChange('seller')}
            className={`px-4 py-2.5 text-sm font-medium rounded-t border-b-2 transition-colors ${
              mainTab === 'seller'
                ? 'border-[var(--zefir)] text-[var(--zefir)]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Seller Database Analysis
          </button>
          <button
            type="button"
            onClick={() => onMainTabChange('buyer')}
            className={`px-4 py-2.5 text-sm font-medium rounded-t border-b-2 transition-colors ${
              mainTab === 'buyer'
                ? 'border-[var(--zefir)] text-[var(--zefir)]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Buyer Swap
          </button>
        </nav>
      </div>
    </header>
  )
}
