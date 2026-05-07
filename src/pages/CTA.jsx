import { useRef } from 'react'
import useInview from '../components/animated/animations/useInview'
import Reveal from '../components/animated/animations/Reveal'
import Section from '../components/ui/Section'
export default function CTA() {
  let ref = useRef(null)
  let inView = useInview({ ref, options: { threshold: 0.4 } })
  return (
    <Section className=" bg-blue-600">
      <div ref={ref} className=" text-center text-white">
        <Reveal visible={inView} animate="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            Comece a estudar com foco hoje mesmo
          </h2>
        </Reveal>

        <Reveal visible={inView} animate="fade-up" delay={100}>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Organize sua rotina, acompanhe seu progresso e mantenha a
            consistência todos os dias.
          </p>
        </Reveal>

        <Reveal visible={inView} animate="zoom-in" delay={200}>
          <button
            className="mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl
                         hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Começar agora
          </button>
        </Reveal>
      </div>
    </Section>
  )
}
