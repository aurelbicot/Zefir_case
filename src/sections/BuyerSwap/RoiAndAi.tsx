import { roiKpis } from '../../data'

const signalRanges = [
  { label: 'Weak signal', range: 'Lift < 0.3pp', color: 'bg-gray-100 border-gray-200 text-gray-700' },
  { label: 'Promising signal', range: 'Lift between 0.3pp and 0.8pp', color: 'bg-amber-50 border-amber-200 text-amber-900' },
  { label: 'Strong signal', range: 'Lift > 0.8pp', color: 'bg-green-50 border-green-200 text-green-800' },
] as const

export function RoiAndAi() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Proving or disproving ROI</h2>
          <p className="text-sm text-gray-600 mt-0.5">We optimise for earlier causal indicators because final Seller mandate signing can take months. The test design below makes incremental impact measurable.</p>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mb-1">Main KPI</p>
          <p className="font-medium text-gray-900">Incremental Seller webform completion rate vs holdout</p>
        </div>

        {/* 80/20 split + explanatory paragraph */}
        <div className="px-5 pb-4">
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex">
              <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 bg-[var(--zefir-muted)] border-r border-gray-200">
                <span className="text-3xl font-bold text-[var(--zefir)]">80%</span>
                <span className="text-sm text-gray-600 mt-1">Exposed</span>
                <span className="text-xs text-gray-500 mt-0.5">Journey + messaging</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 bg-gray-50">
                <span className="text-3xl font-bold text-gray-600">20%</span>
                <span className="text-sm text-gray-600 mt-1">Holdout</span>
                <span className="text-xs text-gray-500 mt-0.5">No journey</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3 max-w-2xl">
            Buyers are randomly split into a <strong className="font-semibold text-gray-800">test group (80%)</strong> receiving the journey and a <strong className="font-semibold text-gray-800">holdout group (20%)</strong> receiving nothing. The difference in Seller webform completion rates between the two groups estimates the incremental lift caused by the experiment.
          </p>
        </div>

        {/* Example interpretation */}
        <div className="px-5 pb-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Example interpretation</h3>
          <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 flex flex-wrap gap-6 items-baseline">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Exposed completion rate</p>
              <p className="text-xl font-bold text-[var(--zefir)]">2.0%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Holdout completion rate</p>
              <p className="text-xl font-bold text-gray-600">1.2%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Incremental lift</p>
              <p className="text-xl font-bold text-green-700">+0.8 pp</p>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-xs text-gray-500 mb-0.5">With 2,400 exposed Buyers</p>
              <p className="text-lg font-semibold text-gray-900">Estimated incremental Sellers ≈ 2,400 × 0.8% ≈ <strong className="text-[var(--zefir)]">19</strong></p>
            </div>
          </div>
        </div>

        {/* Expected signal ranges */}
        <div className="px-5 pb-5 border-t border-gray-100 pt-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Expected signal ranges</h3>
          <p className="text-xs text-gray-500 mb-3">Early signals focus on leading indicators (webform completion); final Seller mandate signing can take months.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {signalRanges.map((s) => (
              <div key={s.label} className={`rounded-lg border px-3 py-2.5 ${s.color}`}>
                <p className="font-medium text-sm">{s.label}</p>
                <p className="text-xs mt-0.5 opacity-90">{s.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">These ranges are directional and should be interpreted alongside segment size and cost.</p>
        </div>

        {/* KPIs + Cost per incremental lead */}
        <div className="px-5 pb-5 border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Tracked KPIs</p>
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            {roiKpis.map((kpi, i) => (
              <li key={i}>{kpi}</li>
            ))}
            <li className="font-medium text-gray-800 mt-2">Cost per incremental Seller lead</li>
          </ul>
          <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-600">
            <p className="font-medium text-gray-800 mb-1">Cost per incremental Seller lead</p>
            <p className="mb-2">Estimates the cost required to generate one additional Seller lead caused by the experiment.</p>
            <p className="mb-2">This is the key business metric for deciding whether the channel is efficient enough to scale.</p>
            <p className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1.5 rounded inline-block">Total experiment cost ÷ Incremental Seller leads generated</p>
          </div>
        </div>

        {/* Decision logic */}
        <div className="px-5 pb-5 border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Decision logic</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
              <p className="text-xs font-semibold text-green-800 mb-2">Continue if</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>Positive lift on Seller webform completion vs holdout</li>
                <li>Cost per incremental Seller lead ≤ current Seller acquisition CAC</li>
                <li>At least one segment clearly outperforms</li>
                <li>Seller call booking also trends positive</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50/30 p-4">
              <p className="text-xs font-semibold text-red-800 mb-2">Kill if</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>No measurable lift vs holdout</li>
                <li>Only engagement metrics improve but Seller intent does not</li>
                <li>Cost per incremental Seller lead significantly exceeds current acquisition CAC</li>
                <li>No segment shows a promising signal after 2 weeks</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">If no clear completion lift appears after 2 weeks, I would stop the test and reallocate effort elsewhere.</p>
        </div>
      </section>
    </div>
  )
}
