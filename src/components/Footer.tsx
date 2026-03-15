export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[var(--bg-off)] py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="text-sm text-gray-500">
          All analyses are backed by the supporting spreadsheet model and raw-data-derived calculations.{' '}
          <a href="#" className="text-[var(--zefir)] hover:underline">Open supporting file</a>
        </p>
      </div>
    </footer>
  )
}
