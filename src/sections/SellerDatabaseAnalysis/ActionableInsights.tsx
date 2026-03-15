import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts'
import { funnel, paidVsOrganic, topZipCodes } from '../../data'
import { Expandable } from '../../components/Expandable'
import { Callout } from '../../components/Callout'

const funnelStages = [
  { stage: 'Visitors', count: funnel.totalVisitors, fill: '#6C2EA8' },
  { stage: 'Engaged', count: funnel.engaged, fill: '#8B5CBF' },
  { stage: 'Started', count: funnel.startedWebform, fill: '#A78BFA' },
  { stage: 'Finished', count: funnel.finishedWebform, fill: '#C4B5FD' },
]
const funnelMax = funnel.totalVisitors

const paidOrganicData = [
  { name: 'Bounce rate', Paid: paidVsOrganic.paid.bounceRatePct, Organic: paidVsOrganic.organic.bounceRatePct },
  { name: 'Start rate (engaged)', Paid: paidVsOrganic.paid.startRateEngagedPct, Organic: paidVsOrganic.organic.startRateEngagedPct },
  { name: 'Finish rate (engaged)', Paid: paidVsOrganic.paid.finishRateEngagedPct, Organic: paidVsOrganic.organic.finishRateEngagedPct },
]

const zipData = topZipCodes.map((z) => ({ name: z.label, share: z.sharePct }))

/** One insight = one block: visual + message. Self-carrying. */
function InsightBlock({
  insight,
  whyItMatters,
  action,
  keyMetrics,
  children,
}: {
  insight: string
  whyItMatters: string
  action: string
  keyMetrics?: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div className="p-5 pb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mb-1">Insight</p>
        <p className="font-semibold text-gray-900">{insight}</p>
      </div>
      <div className="px-5 pb-4">
        {children}
      </div>
      <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
        {keyMetrics && (
          <p className="text-xs text-gray-500 mb-2"><span className="font-semibold text-gray-600">Key metrics:</span> {keyMetrics}</p>
        )}
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Why it matters</p>
        <p className="text-sm text-gray-600 mb-3">{whyItMatters}</p>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Action</p>
        <p className="text-sm text-gray-700">{action}</p>
      </div>
    </section>
  )
}

/** Proportional horizontal bars with totals above. Scale = funnel total. */
function ProportionalFunnelBars() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-500 mb-2">Volume at each stage (proportional to 2,000 visitors)</p>
      {funnelStages.map(({ stage, count, fill }) => (
        <div key={stage} className="flex items-center gap-3">
          <span className="w-20 text-sm text-gray-600 shrink-0">{stage}</span>
          <div className="flex-1 flex items-center gap-2 min-w-0">
            <div className="relative h-8 rounded overflow-hidden bg-gray-100 flex-1 max-w-full">
              <div
                className="h-full rounded"
                style={{ width: `${(count / funnelMax) * 100}%`, backgroundColor: fill }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-900 tabular-nums shrink-0 w-12 text-right">{count.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function SecondaryInsightCard({
  insight,
  consequence,
  suggestedKpi,
  readMore,
}: {
  insight: string
  consequence: string
  suggestedKpi?: string
  readMore: React.ReactNode
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--zefir)] mb-1">Insight</p>
      <p className="font-medium text-gray-900 text-sm mb-2">{insight}</p>
      <p className="text-xs font-semibold text-gray-500 mb-1">Consequence</p>
      <p className="text-sm text-gray-600 mb-2">{consequence}</p>
      {suggestedKpi && <p className="text-xs text-gray-500 mb-2"><span className="font-semibold text-gray-600">Suggested KPI:</span> {suggestedKpi}</p>}
      <Expandable label="Read more" defaultOpen={false}>
        {readMore}
      </Expandable>
    </div>
  )
}

export function ActionableInsights() {
  return (
    <div className="space-y-10">
      {/* Block 1: Funnel = value leak. One section, chart + message. */}
      <InsightBlock
        insight="The biggest value leak happens before lead creation."
        whyItMatters="Most loss is before someone becomes a lead: bounce, no form start, or form abandon. 200 started but did not finish."
        action="Fastest CRM win: webform abandonment recovery, then hot-intent follow-up."
        keyMetrics="2,000 visitors • 836 bounces • 1,164 engaged • 481 started • 281 finished"
      >
        <ProportionalFunnelBars />
      </InsightBlock>

      {/* Block 2: Paid vs Organic = same section as chart */}
      <InsightBlock
        insight="Paid drives scale, Organic drives efficiency."
        whyItMatters="Organic converts better at each step; paid fills volume. Different economics mean different journeys."
        action="CRM journeys should differ by source (paid vs organic)."
        keyMetrics="Paid 1,229 vs Organic 771 • Paid bounce 43.0% vs Organic 39.9% • Paid finish among engaged 22.6% vs Organic 26.5%"
      >
        <div className="w-full h-52 min-h-[180px]">
          <ResponsiveContainer width="100%" height={208} minWidth={0}>
            <BarChart data={paidOrganicData} margin={{ left: 24, right: 24, top: 20 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} unit="%" domain={[0, 55]} />
              <Tooltip formatter={(v) => (v != null ? `${v}%` : '')} />
              <Bar dataKey="Paid" fill="#6C2EA8" radius={[4, 4, 0, 0]} name="Paid">
                <LabelList dataKey="Paid" position="top" className="fill-gray-700" style={{ fontSize: 11 }} formatter={(v) => (v != null ? `${Number(v)}%` : '')} />
              </Bar>
              <Bar dataKey="Organic" fill="#8B5CBF" radius={[4, 4, 0, 0]} name="Organic">
                <LabelList dataKey="Organic" position="top" className="fill-gray-700" style={{ fontSize: 11 }} formatter={(v) => (v != null ? `${Number(v)}%` : '')} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </InsightBlock>

      {/* Block 3: Geo concentration = same section as chart */}
      <InsightBlock
        insight="Lead value is highly concentrated in a few zip code clusters."
        whyItMatters="A few zip codes hold most lead value (proxy); local proof and messaging can unlock it."
        action="Localized CRM and proof points in high-value zones."
        keyMetrics="Zip codes 75, 92 and 78 represent 68% of total lead value proxy"
      >
        <div className="w-full h-44 min-h-[160px]">
          <ResponsiveContainer width="100%" height={176} minWidth={0}>
            <BarChart data={zipData} margin={{ left: 24, right: 24, top: 20 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} unit="%" domain={[0, 40]} />
              <Tooltip formatter={(v) => (v != null ? `${v}%` : '')} />
              <Bar dataKey="share" fill="#6C2EA8" radius={[4, 4, 0, 0]} name="Share">
                <LabelList dataKey="share" position="top" className="fill-gray-700" style={{ fontSize: 11 }} formatter={(v) => (v != null ? `${Number(v)}%` : '')} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Pareto: 3 zip codes (75, 92, 78) = 68% of value. &quot;Other&quot; = 32% spread across <strong>many other zip codes</strong> (not listed).
        </p>
      </InsightBlock>

      {/* More insights — collapsed, secondary */}
      <section>
        <Expandable label="More insights" defaultOpen={false}>
          <p className="mb-4 text-sm text-gray-500">
            Less critical for immediate revenue acceleration; useful to refine CRM strategy and long-term operating model.
          </p>
          <div className="space-y-4">
            <SecondaryInsightCard
              insight="Hot sellers convert better in the short term."
              consequence="Prioritize fast-lane treatment and speed-to-lead for Ready ASAP and Already selling."
              suggestedKpi="Seller call booking rate"
              readMore={<p>Segment by timeline and intent; route hot leads to dedicated follow-up and shorter SLAs.</p>}
            />
            <SecondaryInsightCard
              insight="Long-horizon sellers represent valuable nurture inventory."
              consequence="Don’t discard 3–6 months and &gt;6 months; use drip and re-activation when timing shifts."
              suggestedKpi="Reactivation rate / seller webform completion rate"
              readMore={<p>Lower frequency, value-first content; trigger re-engagement when they return or show intent.</p>}
            />
            <SecondaryInsightCard
              insight="Tracking inconsistencies exist and should be treated as directional noise, not truth."
              consequence="Use Started/Finished as directional; avoid over-optimizing on exact rates until tracking is fixed."
              suggestedKpi="Share of inconsistent tracking rows"
              readMore={<p>Cross-check with other variables and treat conflicting metrics as indicative.</p>}
            />
          </div>
          <Callout title="Data quality note" variant="assumption" className="mt-4">
            <p className="text-sm">Dataset is usable. Some tracking inconsistencies exist. Interpret as directional where Started/Finished conflict with other variables.</p>
          </Callout>
        </Expandable>
      </section>
    </div>
  )
}
