import { useRef, useState, useEffect } from 'react'
import foto1 from '../assets/classe.svg'
import foto2 from '../assets/Learning.svg'
import foto3 from '../assets/People.svg'
import Reveal from '../components/animated/animations/Reveal'
import useInview from '../components/animated/animations/useInview'
import Section from '../components/ui/Section'
const images = [foto1, foto2, foto3]
export default function Hero() {
  let [changeImg, setChangeImg] = useState(0)
  let [animate, setAnimate] = useState(false)
  const current = images[changeImg % images.length]
  const next = images[(changeImg + 1) % images.length]
  const ref = useRef(null)
  const inview = useInview({ ref, options: { threshold: 0.4 } })

  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setChangeImg((prev) => prev + 1)
        setAnimate(false)
      }, 500)
    }, 6000)

    // let id =setInterval( () =>{
    //    setChangeImg(prev=>prev+1)
    // },6000)

    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <Section py="py-40" className="bg-bg-two">
      <main
        ref={ref}
        className="flex flex-col items-center md:items-stretch gap-5 md:flex-row md:justify-between"
      >
        <Reveal visible={inview} animate="fade-up">
          <section className="flex flex-col gap-5">
            <div className="">
              <h1
                index={120}
                className="text-title font-bold text-3xl md:text-5xl mb-1 texte-center"
              >
                Aprenda com mais foco e menos esforço
              </h1>
              <h2 className="text-[#2563EB] font-bold text-3xl md:text-4xl">
                organize seus estudos
              </h2>
            </div>
            <p className="text-md text-text">
              Uma plataforma simples para planejar seus estudos, acompanhar seu
              progresso e evoluir um pouco todos os dias.
            </p>
            <button
              className="flex flex-row justify-center items-center text-white bg-[#2563EB] w-30 p-1 h-10 rounded-sm hover:scale-95
                transition-transform duration-150 focus:ring-2"
            >
              Comecar agora
            </button>
          </section>
        </Reveal>

        <section className="relative h-75 w-70 overflow-hidden ">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-56 h-56 bg-blue-500/20 blur-xl rounded-full"></div>
          </div>

          <img
            key={changeImg}
            src={current}
            className={`absolute transition-all duration-700 z-10 ease-in-out
          ${animate ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        `}
          ></img>
          <img
            key={changeImg + 1}
            src={next}
            className={`absolute transition-all duration-700 z-10 ease-in-out
          ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
          ></img>
        </section>
      </main>
    </Section>
  )
}
