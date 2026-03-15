interface CalloutProps {
  title?: string
  children: React.ReactNode
  variant?: 'default' | 'assumption' | 'key'
  className?: string
}

export function Callout({ title, children, variant = 'default', className = '' }: CalloutProps) {
  const styles = {
    default: 'bg-gray-50 border-gray-200 text-gray-700',
    assumption: 'bg-amber-50/80 border-amber-200 text-amber-900',
    key: 'bg-[var(--zefir-muted)] border-[var(--zefir)]/20 text-gray-800',
  }
  return (
    <div className={`rounded-lg border px-4 py-3 ${styles[variant]} ${className}`}>
      {title && <p className="font-medium text-sm text-gray-700 mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  )
}
