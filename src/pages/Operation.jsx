import { RxStopwatch } from 'react-icons/rx'
import { IoMdBook } from 'react-icons/io'
import { GiProgression } from 'react-icons/gi'
import useInview from '../components/animated/animations/useInview'
import Reveal from '../components/animated/animations/Reveal'
import { useRef } from 'react'
import Section from '../components/ui/Section'
export default function Operation() {
  // {ref,delay = {threshold:0.4}}
  let ref = useRef(null)
  const inView = useInview({ ref, options: { threshold: 0.4 } })
  const steps = [
    {
      title: 'Organize suas matérias',
      description:
        'Crie sua rotina de estudos, defina prioridades e saiba exatamente o que estudar.',
      icons: IoMdBook,
    },
    {
      title: 'Estude com mais concentração',
      description:
        'Use o cronômetro para manter o foco e evitar distrações durante os estudos.',
      icons: RxStopwatch,
    },
    {
      title: 'Veja sua evolução',
      description:
        'Acompanhe seu progresso e mantenha a motivação vendo seus avanços.',
      icons: GiProgression,
    },
  ]
  return (
    <Section className="bg-bg-one">
      <div ref={ref} className="flex flex-col gap-20 font-inter">
        <div className="flex flex-col gap-5 text-center">
          <Reveal visible={inView} animate="fade-up">
            {' '}
            <h1 className="text-title font-bold text-4xl md:text-5xl">
              Como Funciona
            </h1>
          </Reveal>
          <Reveal visible={inView} animate="fade-up" delay={100}>
            {' '}
            <h2 className="text-md text-text">
              Três passos simples para estudar melhor todos os dias
            </h2>
          </Reveal>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {steps.map((step, index) => {
            const Icon = step.icons

            return (
            
              <Reveal visible={inView} animate="fade-up" delay={150 * index}>
                <section
                  key={index}
                  className="flex flex-col items-center gap-5 w-full"
                >
                  <div className="relative">
                    <div className="absolute bg-blue-500/20 w-10 h-10 left-3 top-1 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm  opacity-80"></div>
                    <div>
                      <Icon className="w-10 h-10 text-text shrink-0"></Icon>
                    </div>
                  </div>
                  <h2 className="text-title text-xl md  font-bold lg:text-2xl text-center">
                    {step.title}
                  </h2>
                  <p className=" text-text text-center md:text-center">
                    {step.description}
                  </p>
                </section>
              </Reveal>
            )
          })}
          {console.log(inView)}
        </div>
      </div>
    </Section>
  )
}
