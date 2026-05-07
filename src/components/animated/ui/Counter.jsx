import { useEffect, useState } from 'react'

export default function Counter({ number, inview }) {
  let [count, setCount] = useState(0)

  useEffect(() => {
    if (!inview) return

    let value = number
    let time = null
    let duration = 1500

    function animate(timeStamp) {
      if (!time) time = timeStamp
      let progress = Math.min((timeStamp - time) / duration, 1)

      setCount(Math.floor(value * progress))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inview, number])

  return (
    <div className="text-md md:text-xl text-title font-bold">
      {count.toLocaleString('pt-BR')}
    </div>
  )
}
