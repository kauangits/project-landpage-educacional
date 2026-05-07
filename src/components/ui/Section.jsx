export default function Section({ children, py = 'py-24', className = '' }) {
  return (
    <section className={`w-full ${py} ${className}`}>
      <div className="max-w-7xl mx-auto px-2">{children}</div>
    </section>
  )
}
