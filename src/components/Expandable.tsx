import { useState } from 'react'

interface ExpandableProps {
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Expandable({ label, children, defaultOpen = false, className = '' }: ExpandableProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
      >
        {label}
        <span className="text-gray-400">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4 pt-0 text-sm text-gray-600 border-t border-gray-100">{children}</div>}
    </div>
  )
}
