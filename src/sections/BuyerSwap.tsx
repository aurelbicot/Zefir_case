import { useState } from 'react'
import { Hypothesis } from './BuyerSwap/Hypothesis'
import { JourneyDesign } from './BuyerSwap/JourneyDesign'
import { RoiAndAi } from './BuyerSwap/RoiAndAi'
import { AiConcretely } from './BuyerSwap/AiConcretely'

type SubTab = 'hypothesis' | 'journey' | 'roi' | 'ai'

export function BuyerSwap() {
  const [subTab, setSubTab] = useState<SubTab>('hypothesis')

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8">
        <button
          type="button"
          onClick={() => setSubTab('hypothesis')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'hypothesis'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          A. Rational hypothesis
        </button>
        <button
          type="button"
          onClick={() => setSubTab('journey')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'journey'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          B. Automated journey design
        </button>
        <button
          type="button"
          onClick={() => setSubTab('roi')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'roi'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          C. ROI measurement and AI leverage
        </button>
        <button
          type="button"
          onClick={() => setSubTab('ai')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'ai'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          D. How I would use AI concretely
        </button>
      </div>
      {subTab === 'hypothesis' && <Hypothesis />}
      {subTab === 'journey' && <JourneyDesign />}
      {subTab === 'roi' && <RoiAndAi />}
      {subTab === 'ai' && <AiConcretely />}
    </div>
  )
}
