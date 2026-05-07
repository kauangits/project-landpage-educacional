export default function Reveal({ children, visible, animate, delay = 0 }) {
  const baseClass = 'transition-all duration-500 ease-out'
  const hiddenStates = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-down': 'opacity-0 -translate-y-8',
    'fade-left': 'opacity-0 -translate-x-8',
    'fade-right': 'opacity-0 translate-x-8',
    'slide-left': 'opacity-0 -translate-x-12',
    'slide-right': 'opacity-0 translate-x-12',
    'zoom-in': 'opacity-0 scale-95',
    'bounce-in': 'opacity-0 scale-75',
  }

  const visibleStates = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 -translate-y-0',
    'fade-left': 'opacity-100 -translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'slide-left': 'opacity-100 -translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    'zoom-in': 'opacity-100 scale-100',
    'bounce-in': 'opacity-100 scale-100',
  }

  return (
    <div
      className={`${baseClass} ${visible ? visibleStates[animate] : hiddenStates[animate]}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0' }}
    >
      {children}
    </div>
  )
}
