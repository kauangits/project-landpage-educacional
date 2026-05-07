import { CiStopwatch, CiDark } from 'react-icons/ci'
import { FiBook } from 'react-icons/fi'
import { GrInProgress } from 'react-icons/gr'
import useInview from '../components/animated/animations/useInview'
import { useRef } from 'react'
import Reveal from '../components/animated/animations/Reveal'
import FeatureCard from '../components/cards/FeatureCard'
import Section from '../components/ui/Section'
const features = [
  {
    title: 'Cronômetro de foco',
    description: 'Controle seu tempo com modos normal, pomodoro e descanso.',
    icon: CiStopwatch,
  },
  {
    title: 'Organização por matérias',
    description: 'Visualize suas matérias e prioridades em um só lugar.',
    icon: FiBook,
  },
  {
    title: 'Acompanhamento de progresso',
    description: 'Veja quanto tempo você estudou e mantenha a consistência.',
    icon: GrInProgress,
  },
  {
    title: 'Modo escuro',
    description: 'Estude de dia ou à noite com mais conforto.',
    icon: CiDark,
  },
]

export default function Features() {
  let ref = useRef(null)
  let inview = useInview({ ref, options: { threshold: 0.1 } })

  return (
    <Section className="bg-bg-two">
      <div ref={ref} className="flex flex-col items-center gap-10">
        <Reveal visible={inview} animate="fade-up">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-title text-center">
              Tudo que você precisa para estudar melhor
            </h1>
            <p className="text-sm text-text">
              Ferramentas simples, feitas para foco e consistência
            </p>
          </div>
        </Reveal>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-sm md:max-w-md lg:max-w-4xl  mx-auto m-4">
          {features.map((feature, index) => (
            <Reveal animate="fade-up" visible={inview} delay={index * 120}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                text={feature.title}
                description={feature.description}
              ></FeatureCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
