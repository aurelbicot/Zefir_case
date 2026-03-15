import { aiLeverCards } from '../../data'

function renderImplementationLine(line: string, i: number) {
  const iconMatch = line.match(/^([🤖✉️🧠📊🔁📄🌐])\s(.*)/)
  if (iconMatch) {
    return (
      <p key={i} className="flex gap-2 text-xs">
        <span className="shrink-0" aria-hidden>{iconMatch[1]}</span>
        <span className="text-gray-600">{iconMatch[2]}</span>
      </p>
    )
  }
  if (line.startsWith('• ')) {
    return (
      <p key={i} className="pl-4 flex gap-2 text-xs text-gray-600">
        <span className="text-gray-400">•</span>
        <span>{line.slice(2)}</span>
      </p>
    )
  }
  if (['Signals include:', 'Output:', 'Example:', 'Inputs:'].includes(line)) {
    return <p key={i} className="font-semibold text-gray-700 mt-1.5 first:mt-0 text-xs">{line}</p>
  }
  if (line === 'Probability score → route high-score users into Seller acquisition journey') {
    return (
      <p key={i} className="text-xs text-gray-600">
        <strong className="text-gray-800">Probability score</strong> → route high-score users into Seller acquisition journey
      </p>
    )
  }
  if (line.startsWith('"') && line.endsWith('"')) {
    return <p key={i} className="pl-4 italic text-[var(--zefir)] text-xs">{line}</p>
  }
  return <p key={i} className="text-xs text-gray-600">{line}</p>
}

export function AiConcretely() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">How I would use AI concretely</h2>
          <p className="text-xs text-gray-500 mt-0.5">AI → segmentation → automation → learning loop. Each card: question, core idea, implementation.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {aiLeverCards.map((card, idx) => (
            <div key={idx} className="p-5 bg-white flex flex-col gap-3">
              <p className="text-sm font-semibold text-[var(--zefir)] leading-snug">{card.question}</p>
              <p className="text-sm font-medium text-gray-900 leading-snug"><strong className="text-gray-800">Core idea:</strong> {card.coreIdea}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Implementation</p>
                <div className="space-y-1.5">
                  {card.implementation.map((line, i) => renderImplementationLine(line, i))}
                </div>
              </div>
              {card.expectedImpact && (
                <p className="text-xs pt-1 border-t border-gray-100 mt-auto"><span className="font-semibold text-gray-500">Expected impact:</span> <span className="text-gray-700">{card.expectedImpact}</span></p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
