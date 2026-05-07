import { useEffect, useState } from 'react'

export default function useInview({ ref, options = { threshold: 0.4 } }) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options,
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, options])

  return isVisible
}
