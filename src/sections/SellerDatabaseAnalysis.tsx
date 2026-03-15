import { useState } from 'react'
import { ActionableInsights } from './SellerDatabaseAnalysis/ActionableInsights'
import { CrmRevenue } from './SellerDatabaseAnalysis/CrmRevenue'

type SubTab = 'insights' | 'crm'

export function SellerDatabaseAnalysis() {
  const [subTab, setSubTab] = useState<SubTab>('insights')

  return (
    <div>
      <div className="flex gap-1 border-b border-gray-200 mb-8">
        <button
          type="button"
          onClick={() => setSubTab('insights')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'insights'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          A. Actionable business insights
        </button>
        <button
          type="button"
          onClick={() => setSubTab('crm')}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            subTab === 'crm'
              ? 'bg-white border border-b-0 border-gray-200 -mb-px text-[var(--zefir)]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          B. +20% revenue in 30 days with CRM
        </button>
      </div>
      {subTab === 'insights' && <ActionableInsights />}
      {subTab === 'crm' && <CrmRevenue />}
    </div>
  )
}
