/**
 * Source: Zefir_case_analysis_v2.xlsx (Seller funnel) and case spec.
 * All figures are from the spreadsheet or the specified business case.
 */

export const funnel = {
  totalVisitors: 2000,
  bounces: 836,
  engaged: 1164,
  startedWebform: 481,
  finishedWebform: 281,
  bounceRatePct: 41.8,
  startRateAmongEngagedPct: 41.3,
  finishRateAmongEngagedPct: 24.1,
  completionFromStartersPct: 58.4,
} as const

export const paidVsOrganic = {
  paid: { visitors: 1229, bounceRatePct: 43.0, startRateEngagedPct: 38.5, finishRateEngagedPct: 22.6 },
  organic: { visitors: 771, bounceRatePct: 39.9, startRateEngagedPct: 45.6, finishRateEngagedPct: 26.5 },
} as const

export const topZipCodes = [
  { zip: '75', sharePct: 28, label: 'Paris (75)' },
  { zip: '92', sharePct: 22, label: 'Hauts-de-Seine (92)' },
  { zip: '78', sharePct: 18, label: 'Yvelines (78)' },
  { zip: 'Other', sharePct: 32, label: 'Other' },
] as const

export const crmRevenueMath = [
  { lever: 'Webform abandonment recovery', pool: '200 started, did not finish', upliftPct: '~15–25%', valueProxy: '~€3.26k avg', incremental: '~€131k' },
  { lever: 'Hot-intent activation', pool: 'Already selling + Ready ASAP', upliftPct: '~5–10%', valueProxy: 'Lead value proxy', incremental: '~€30k' },
  { lever: 'Localized CRM', pool: 'High-value zip clusters (75, 92, 78)', upliftPct: '~8–12%', valueProxy: 'Higher lead value zones', incremental: '~€124k' },
  { lever: 'Long-horizon nurture', pool: '3–6 months, >6 months', upliftPct: '~3–6%', valueProxy: 'Longer conversion delay', incremental: '~€60k' },
] as const

export const crmPriorities = [
  {
    rank: 1,
    title: 'Recover webform abandoners',
    why: '200 visitors started the seller webform but did not finish. That is about 42% of those who started and 10% of all visitors. This is the fastest short-term CRM lever.',
    target: 'We target visitors who started but did not finish the seller webform.',
    actions: 'Send abandonment email or SMS within 1 hour; then a reminder at D1 and D3. Optionally capture exit-intent before they leave.',
    mechanism: 'We recover high-intent drop-offs with minimal incremental cost.',
    primaryKpi: 'Webform completion recovery rate',
    successThreshold: 'Recover 15–20% of started-not-finished users within 30 days',
    whyThisRank: 'Highest intent + fastest time-to-value',
  },
  {
    rank: 2,
    title: 'Fast-lane hot-intent sellers',
    why: 'Sellers who are already selling or ready ASAP convert better in the short term. We should treat them as a priority segment.',
    target: 'We target leads already selling or with a “Ready ASAP” timeline.',
    actions: 'Apply shorter response windows, stronger routing to sales, and SMS or immediate nudges.',
    mechanism: 'Speed-to-lead and prioritization increase conversion for this segment.',
    primaryKpi: 'Seller call booking rate for hot-intent leads',
    successThreshold: '+10–15% booking uplift vs current hot-intent baseline',
    whyThisRank: 'Strongest short-term monetization probability after abandonment recovery',
  },
  {
    rank: 3,
    title: 'Localized CRM on high-value zip codes',
    why: 'Top zip codes 75, 92 and 78 concentrate a disproportionate share of value. Local proof and messaging can unlock it.',
    target: 'We target leads in high-value zip clusters (75, 92, 78).',
    actions: 'Use local proof, local market reassurance and zone-specific messaging.',
    mechanism: 'Trust and relevance improve conversion in these key geographies.',
    primaryKpi: 'Seller webform completion uplift in top zip clusters',
    successThreshold: '+5–10% uplift vs non-localized messaging',
    whyThisRank: 'Concentrated value, but requires more setup than priorities 1 and 2',
  },
  {
    rank: 4,
    title: 'Long-horizon nurture',
    why: 'Value exists in the pipeline but activation takes longer. We should not discard these leads.',
    target: 'We target leads with a 3–6 months or more than 6 months timeline.',
    actions: 'Send drip content, market updates and re-activation when their timing shifts.',
    mechanism: 'We keep the pipeline warm so they convert when they are ready.',
    primaryKpi: 'Reactivation rate / seller webform completion rate',
    successThreshold: '+3–5% incremental reactivation within 30 days',
    whyThisRank: 'Valuable pool, but slower to convert',
  },
] as const

export const buyerSwap = {
  buyersVisitedListings30d: 3000,
  didNotBookVisit: true,
} as const

export const journeySteps = [
  { day: 'Day 0', title: 'Need to sell before you buy?', channel: 'Email / SMS / Retargeting' },
  { day: 'Day 2', title: 'Helpful content / guide / estimate CTA', channel: 'Email / On-site' },
  { day: 'Day 5', title: 'Local proof and reassurance', channel: 'Email / Retargeting' },
  { day: 'Day 9', title: 'Talk to an expert / personalized plan', channel: 'Email / SMS / On-site' },
] as const

export const roiKpis = [
  'Incremental Seller webform completion rate vs holdout',
  'Seller webform start rate',
  'Seller calls booked',
  'Incremental lead value',
  'Unsubscribe / complaint rate',
] as const

export const aiLeverCards = [
  {
    question: 'How do we tailor copy by segment without multiplying production?',
    title: 'AI-generated personalized messaging by segment',
    coreIdea: 'Generate message variants automatically by intent segment.',
    implementation: [
      '🤖 OpenAI generates 3 email/SMS variants per segment',
      '✉️ Customer.io deploys and rotates them automatically',
      '📊 Performance is tracked to identify winning variants',
    ],
    expectedImpact: 'Higher open rate and click-through by segment',
  },
  {
    question: 'How do we know who is sell-before-buy vs. pure buyer?',
    title: 'AI classification of buyer motivation',
    coreIdea: 'Identify who is likely "sell-before-buy" vs pure buyer.',
    implementation: [
      '🧠 AI classifies users based on behaviour signals',
      'Signals include:',
      '• listing pages viewed',
      '• visits to estimation pages',
      '• session frequency',
      'Output:',
      'Probability score → route high-score users into Seller acquisition journey',
    ],
    expectedImpact: 'Better routing precision toward Seller-intent users',
  },
  {
    question: 'How do we test headlines and CTAs by segment?',
    title: 'Dynamic landing page variants',
    coreIdea: 'Adapt headlines and CTAs dynamically to the visitor segment.',
    implementation: [
      '🤖 AI generates segment-specific headlines',
      'Example:',
      '"Sell your home in Hauts-de-Seine before buying"',
      '🌐 Landing variants generated via Webflow / Cursor pages',
    ],
    expectedImpact: 'Higher estimate CTA rate by segment',
  },
  {
    question: 'How do we create lead magnets without heavy production?',
    title: 'Utility content generation',
    coreIdea: 'Create high-value lead magnets automatically.',
    implementation: [
      '📄 AI generates a personalized "sell-before-buy plan"',
      'Inputs:',
      '• estimated property price',
      '• buying area',
      '• timeline',
      'Output:',
      '1-page plan delivered after email capture',
    ],
    expectedImpact: 'Higher email capture and Seller webform start rate',
  },
  {
    question: 'How do we learn which copy works best and iterate fast?',
    title: 'AI-assisted daily learning loop',
    coreIdea: 'Continuously improve messaging using AI summaries.',
    implementation: [
      '📊 Customer.io exports campaign performance',
      '🤖 OpenAI summarizes winning subject lines, CTAs and segments',
      '🔁 New variants generated automatically for the next iteration',
    ],
    expectedImpact: 'Faster iteration cycle and higher copy win rate',
  },
] as const
