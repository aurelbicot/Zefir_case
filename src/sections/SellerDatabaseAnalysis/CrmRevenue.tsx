import { crmPriorities, crmRevenueMath } from '../../data'
import { Callout } from '../../components/Callout'
import { Expandable } from '../../components/Expandable'

/** Bold key elements only: numbers, %, ranges, amounts. Use sparingly. */
function emphasizeKeys(text: string): React.ReactNode {
  const re = /(~€\d+k|\d+[–-]\d+|\d+(?:,\d+)*(?:\.\d+)?%?)/g
  const parts = text.split(re)
  return parts.map((part, i) =>
    /^~€\d+k$|^\d+[–-]\d+$|^\d/.test(part) ? (
      <strong key={i} className="font-semibold text-gray-800">{part}</strong>
    ) : (
      part
    )
  )
}

/** Icons for consistent priority structure (Why / Target / Actions / Mechanism) */
const IconWhy = () => (
  <svg className="shrink-0 w-4 h-4 text-[var(--zefir)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
)
const IconTarget = () => (
  <svg className="shrink-0 w-4 h-4 text-[var(--zefir)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
)
const IconActions = () => (
  <svg className="shrink-0 w-4 h-4 text-[var(--zefir)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
)
const IconMechanism = () => (
  <svg className="shrink-0 w-4 h-4 text-[var(--zefir)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
)

const incrementalValues = [131, 30, 124, 60] as const
const totalUpside = 344
const maxIncremental = 131

export function CrmRevenue() {
  return (
    <div className="space-y-10">
      {/* Headline */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          How I would attack +20% revenue growth in 30 days with CRM as the main lever
        </h2>
        <p className="text-sm text-gray-500">Below are four priorities, each with the same structure: why this lever, target segment, example actions and mechanism.</p>
      </section>

      {/* Priority blocks: rank + title prominent, rest in grey */}
      <section className="space-y-4">
        {crmPriorities.map((p) => (
          <div
            key={p.rank}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col sm:flex-row"
          >
            <div className="sm:w-28 shrink-0 flex sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:py-5 px-4 py-3 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-2xl font-bold text-[var(--zefir)]">{p.rank}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Priority</span>
            </div>
            <div className="flex-1 p-5 min-w-0">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--zefir)]">
                    <IconWhy /> Why this lever
                  </dt>
                  <dd className="text-gray-600 mt-0.5">{emphasizeKeys(p.why)}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--zefir)]">
                    <IconTarget /> Target
                  </dt>
                  <dd className="text-gray-600 mt-0.5">{emphasizeKeys(p.target)}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--zefir)]">
                    <IconActions /> Example actions
                  </dt>
                  <dd className="text-gray-600 mt-0.5">{emphasizeKeys(p.actions)}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--zefir)]">
                    <IconMechanism /> Mechanism
                  </dt>
                  <dd className="text-gray-600 mt-0.5">{emphasizeKeys(p.mechanism)}</dd>
                </div>
              </dl>
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-1 text-xs">
                <span><span className="font-semibold text-gray-500">Primary KPI:</span> <span className="text-gray-700">{p.primaryKpi}</span></span>
                <span><span className="font-semibold text-gray-500">Success threshold:</span> <span className="text-gray-700">{p.successThreshold}</span></span>
                <span><span className="font-semibold text-gray-500">Why this rank:</span> <span className="text-gray-700">{p.whyThisRank}</span></span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why this order vs. gain order */}
      <Callout variant="key" title="Why this order and not by potential gain?">
        <p className="text-sm">Prioritization is based on <strong className="font-semibold text-gray-800">speed of impact</strong>, <strong className="font-semibold text-gray-800">ease of implementation</strong>, and <strong className="font-semibold text-gray-800">probability of short-term monetization</strong>, not only absolute theoretical upside. In the revenue math below, potential gain runs roughly: abandonment → localized CRM → long-horizon nurture → hot-intent. We put abandonment first (largest and fastest), then hot-intent (next fastest), then localized CRM and long-horizon nurture (more setup and time).</p>
      </Callout>

      {/* Revenue math: visual bars + table, self-carrying */}
      <section className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Revenue math and assumptions</h3>
          <p className="text-sm text-gray-600 mt-0.5">This section is <strong className="font-semibold text-gray-800">directional</strong> only. We use <strong className="font-semibold text-gray-800">lead value</strong> as a proxy for revenue. Because booking, show-up and signed-mandate rates are missing, this section estimates <strong className="font-semibold text-gray-800">directional incremental lead value</strong>, not actual booked revenue.</p>
        </div>
        <Callout variant="assumption" className="mx-5 mt-4 mb-0">
          <p className="text-sm">Actual revenue cannot be rigorously projected from this file alone. The model is directional and should be read as such.</p>
        </Callout>

        {/* Visual: one bar per lever, proportional, amount on the right */}
        <div className="p-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Below is the potential incremental lead value per lever, in a directional way.</p>
          {crmRevenueMath.map((row, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-48 text-sm text-gray-700 shrink-0 truncate" title={row.lever}>{row.lever}</span>
              <div className="flex-1 h-7 rounded bg-gray-100 overflow-hidden min-w-[80px]">
                <div
                  className="h-full rounded bg-[var(--zefir)]"
                  style={{ width: `${(incrementalValues[i] ?? 0) / maxIncremental * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-[var(--zefir)] tabular-nums w-14 text-right shrink-0">~€{incrementalValues[i]}k</span>
            </div>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
            <span className="w-48 text-sm font-medium text-gray-900 shrink-0">Total directional upside (sum of the four levers)</span>
            <div className="flex-1 h-8 rounded bg-gray-100 overflow-hidden" />
            <span className="text-base font-bold text-[var(--zefir)] tabular-nums w-14 text-right shrink-0">~€{totalUpside}k</span>
          </div>
        </div>

        {/* Compact table for pool / uplift / proxy */}
        <div className="overflow-x-auto border-t border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Lever</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Pool</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Uplift (approx.)</th>
                <th className="text-left px-4 py-2.5 font-medium text-gray-500">Value proxy</th>
              </tr>
            </thead>
            <tbody>
              {crmRevenueMath.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="px-4 py-2.5 text-gray-900">{row.lever}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.pool}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.upliftPct}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.valueProxy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-5 bg-gray-50 border-t border-gray-100">
          <Callout variant="key" title="Interpretation">
            <p className="text-sm">On this sample alone, CRM can plausibly unlock high single-digit uplift in <strong className="font-semibold text-gray-800">lead value proxy</strong> over 30 days. Reaching a true +20% monthly revenue acceleration would likely require extending the same playbook beyond this sample to the broader historical CRM base.</p>
          </Callout>
        </div>
      </section>

      <Expandable label="What I would operationalize in week 1 vs week 2 vs week 3–4" defaultOpen={false}>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
          <li><strong className="text-gray-800">Week 1:</strong> Ship the webform abandonment flow (trigger, copy, 1h then D1 then D3). Define the hot-intent segment and routing rules.</li>
          <li><strong className="text-gray-800">Week 2:</strong> Enable localized messaging for top zip codes and start the long-horizon nurture sequence.</li>
          <li><strong className="text-gray-800">Weeks 3–4:</strong> Measure abandonment recovery and hot-intent conversion, iterate on copy and segments, and add a holdout if not already in place.</li>
        </ul>
      </Expandable>
    </div>
  )
}
