import { useRef } from 'react'
import { PiStudent } from 'react-icons/pi'
import { Ri24HoursFill, RiProgress1Line } from 'react-icons/ri'

import useInview from '../components/animated/animations/useInview'
import Reveal from '../components/animated/animations/Reveal'
import StartCard from '../components/cards/StatCard'
import Section from '../components/ui/Section'

const stats = [
  { number: 2035, text: 'estudantes', icon: PiStudent },
  { number: 3035, text: 'horas', icon: Ri24HoursFill },
  { number: 1050, text: 'secoes de foco', icon: PiStudent },
  { number: 4000, text: 'qualquer coisa', icon: RiProgress1Line },
]
export default function Stats() {
  let ref = useRef(null)
  const inview = useInview({ ref, options: { threshold: 0.4 } })

  return (
    <Section py="py-20" className="bg-bg-one">
      <div
        ref={ref}
        className="flex flex-col md:flex-row gap-20 font-inter justify-between"
      >
        <div className="text-center md:text-left">
          <Reveal animate="fade-up" visible={inview}>
            <h1 className="text-title font-bold text-3xl md:text-4xl md:max-w-150 mb-2">
              Transformando rotina de estudos em resultados reais
            </h1>
          </Reveal>
          <Reveal animate="fade-up" visible={inview} delay={100}>
            <p className="text-text text-sm md:text-md">
              Nossa plataforma já ajudou estudantes a manter consistência, foco
              e organização nos estudos.
            </p>
          </Reveal>
        </div>
        <div
          className={`grid grid-cols-2 gap-10 mx-auto items-center translate-all duration-700 ease-in-out`}
        >
          {stats.map((stat, index) => (
            <Reveal animate="fade-up" visible={inview} delay={100}>
              <StartCard
                key={index}
                icon={stat.icon}
                inview={inview}
                number={stat.number}
                text={stat.text}
              ></StartCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
