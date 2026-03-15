import { buyerSwap } from '../../data'

export function Hypothesis() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Can non-converting Buyers become incremental Sellers?
        </h2>

        {/* One visual: pool → gap → outcome. Self-carrying. */}
        <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[var(--zefir)] tabular-nums">{buyerSwap.buyersVisitedListings30d.toLocaleString()}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Buyers (30d)</span>
            </div>
            <span className="text-gray-400 text-sm">visited listings, no visit booked</span>
            <div className="flex flex-col items-center px-4 py-2.5 rounded-lg border-2 border-dashed border-[var(--zefir)]/40 bg-white">
              <span className="text-sm font-semibold text-[var(--zefir)]">?</span>
              <span className="text-xs text-gray-500">Latent Seller intent?</span>
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex flex-col items-center px-4 py-2.5 rounded-lg bg-[var(--zefir-muted)]">
              <span className="text-sm font-semibold text-[var(--zefir)]">Incremental Sellers</span>
              <span className="text-xs text-gray-500">if scalable and efficient</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Hypothesis</p>
            <p className="text-sm text-gray-700">Some of this pool may have latent Seller intent. The question we test is whether we can turn it into a scalable, efficient Seller acquisition lever.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Why it matters</p>
            <p className="text-sm text-gray-700">If we can convert part of this pool to Sellers at an acceptable cost per lead, we get a new acquisition channel without proportional ad spend.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Success looks like</p>
            <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1 mt-1">
              <li>We see <strong className="font-semibold text-gray-800">incremental</strong> Seller webform completions and Seller calls, not just engagement.</li>
              <li>Cost per incremental Seller lead <strong className="font-semibold text-gray-800">matches or beats</strong> current Seller acquisition CAC.</li>
              <li>At least one segment delivers a <strong className="font-semibold text-gray-800">clear lift</strong> large enough to justify scaling.</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2 italic">Final mandate signing can take months, so early success is assessed through leading causal indicators.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Decision framework in less than 2 weeks</h3>
          <p className="text-sm text-gray-600 mt-1">
            We run a short test with a <strong className="font-semibold text-gray-800">holdout</strong>. We compare Seller conversion (webform start/finish, call booking) between exposed users and holdout. We scale the journey only if both steps below are positive.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
            <span className="w-9 h-9 rounded-full bg-[var(--zefir)] text-white text-sm font-bold flex items-center justify-center mb-3">1</span>
            <p className="font-medium text-gray-900">Step 1: Is there a signal?</p>
            <p className="text-sm text-gray-600 mt-1">We check whether exposed users show higher Seller conversion than the holdout.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mt-2">KPI</p>
            <p className="text-sm text-gray-700 mt-0.5"><strong className="font-semibold text-gray-800">Seller webform completion rate</strong> (exposed vs holdout). Secondary: webform start rate, Seller call booking rate.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mt-2">Validated if</p>
            <ul className="text-sm text-gray-700 mt-0.5 list-disc pl-4 space-y-0.5">
              <li>Seller webform completion is at least <strong className="font-semibold text-gray-800">+0.5 percentage points</strong> above holdout, or <strong className="font-semibold text-gray-800">+15–25% relative lift</strong> vs holdout</li>
              <li>and Seller call booking trends positive</li>
            </ul>
          </div>
          <div className="hidden md:flex items-center justify-center p-4 text-gray-300 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-center">
            <span className="w-9 h-9 rounded-full bg-[var(--zefir)] text-white text-sm font-bold flex items-center justify-center mb-3">2</span>
            <p className="font-medium text-gray-900">Step 2: Is it incremental?</p>
            <p className="text-sm text-gray-600 mt-1">We check whether we are creating new Sellers or mostly accelerating or cannibalising intent that would have converted anyway.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mt-2">KPI</p>
            <p className="text-sm text-gray-700 mt-0.5"><strong className="font-semibold text-gray-800">Holdout completion rate vs pre-test baseline</strong>; cost per incremental Seller lead.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mt-2">Validated if</p>
            <ul className="text-sm text-gray-700 mt-0.5 list-disc pl-4 space-y-0.5">
              <li>Holdout remains <strong className="font-semibold text-gray-800">in line with or below</strong> pre-test baseline</li>
              <li>Exposed remains above holdout</li>
              <li>Cost per incremental Seller lead stays <strong className="font-semibold text-gray-800">within or below</strong> current Seller CAC range</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
