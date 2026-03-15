import { journeySteps } from '../../data'
import { Expandable } from '../../components/Expandable'

export function JourneyDesign() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Lightweight no-engineering test design</h2>
        <p className="text-sm text-gray-600 mb-2">
          This is a <strong className="font-semibold text-gray-800">low-cost, no-engineering validation test</strong>, not a fully scaled acquisition system. In the standard Buyer journey, users go from <strong className="font-semibold text-gray-800">ZIA home search</strong> → <strong className="font-semibold text-gray-800">Visit booking</strong> → Visit done → Buying offer. We target users who stayed in the search phase and <strong className="font-semibold text-gray-800">did not book a visit</strong> within 24h. This journey tests whether Seller-oriented messaging can re-engage them (as potential Sellers) before they exit the funnel.
        </p>
        <p className="text-sm text-gray-500 mb-6">Trigger: visited listing pages, did not book a visit within 24h.</p>

        {/* One block: segments + channels as visual tags */}
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Segments</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[var(--zefir-muted)] text-[var(--zefir)] text-sm font-medium">Known, high-intent</span>
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">Known, lower-intent</span>
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">Anonymous</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Channels</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">Email</span>
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">SMS</span>
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">Retargeting</span>
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-sm">On-site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey: visual flow Day 0 → Day 2 → Day 5 → Day 9 */}
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Journey flow</h3>
            <p className="text-xs text-gray-500 mt-0.5">Same logic for all segments; channel mix by segment. Steps run in sequence over time.</p>
          </div>
          <div className="p-5 overflow-x-auto">
            <div className="flex items-stretch gap-0 min-w-max">
              {journeySteps.map((step, i) => (
                <div key={step.day} className="flex items-center gap-0">
                  <div className="w-40 sm:w-44 rounded-lg border-2 border-[var(--zefir)]/30 bg-white p-4 flex flex-col gap-1 shrink-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--zefir)]">{step.day}</span>
                    <p className="font-medium text-gray-900 text-sm leading-tight">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.channel}</p>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="flex items-center justify-center px-1 sm:px-2 shrink-0">
                      <svg className="w-6 h-6 text-[var(--zefir)]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mb-1">Primary journey KPI</p>
            <p className="text-sm text-gray-700 mb-2">Seller webform completion rate</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Secondary KPIs</p>
            <p className="text-xs text-gray-600">Seller call booking rate • estimate CTA click-through • unsubscribe rate</p>
          </div>
          <div className="p-5 bg-gray-50 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Exit rules</p>
            <div className="flex flex-wrap gap-2">
              {['Seller webform', 'Seller call', 'Buyer visit', 'Unsubscribe', '14 days'].map((label) => (
                <span key={label} className="px-2.5 py-1 rounded bg-white border border-gray-200 text-xs text-gray-600">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Expandable label="Tools I would use without engineering support" defaultOpen={false}>
        <p className="text-sm text-gray-600 mb-3">I would rely on the following tools to run this test without engineering support. Order reflects operational importance.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li><strong className="text-gray-800">Customer.io</strong>: email and SMS journeys and segmentation.</li>
          <li><strong className="text-gray-800">Make</strong>: automation and triggers between systems.</li>
          <li><strong className="text-gray-800">GA / CRM audiences</strong>: audience sync and retargeting lists.</li>
          <li><strong className="text-gray-800">Meta / Google retargeting</strong>: reach anonymous listing visitors who did not book a visit.</li>
          <li><strong className="text-gray-800">OpenAI</strong>: copy and personalisation where useful.</li>
          <li><strong className="text-gray-800">Cloudflare</strong>: quick edge scripts and routing.</li>
          <li><strong className="text-gray-800">Cursor</strong>: landing pages and forms (instead of Lovable), so I stay autonomous and limit cost.</li>
        </ul>
      </Expandable>
    </div>
  )
}
