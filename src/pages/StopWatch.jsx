import { useEffect, useState } from 'react'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { PiStopCircle } from 'react-icons/pi'
import Section from '../components/ui/Section'
// import { IoMdTime } from "react-icons/io";
const modos = ['normal', 'pomodoro', 'descanso']
export default function StopWatch() {
  let [time, setTime] = useState(0)
  let [isRunning, setIsRunning] = useState(false)
  let [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'normal'
  })
  const MODE_CONFIG = {
    normal: 0,
    pomodoro: 1500,
    descanso: 300,
  }
  //    timeColor: "text-gray-700",
  // button: "text-gray-600",
  // hover: "hover:bg-gray-500/10",
  // ring: "hover:ring-gray-400",
  const themes = {
    normal: {
      title: 'Normal',
      textTime: 'text-blue-500',
      buttonclicado: 'ring-2 ring-blue-500 text-blue-600 hover:ring-blue-500',
      button: {
        running: {
          bg: 'bg-blue-500',
          text: 'text-white',
          hover: '',
          ring: '',
        },
        noRunning: {
          bg: 'bg-white',
          text: 'text-blue-600',
          ring: 'ring-2 ring-blue-400',
          hover: '',
        },
      },
    },
    pomodoro: {
      title: 'Pomodoro',
      textTime: 'text-red-600',
      buttonclicado: 'ring-2 ring-red-500 text-red-600 hover:ring-red-500',
      button: {
        running: {
          bg: 'bg-red-500',
          text: 'text-white',
          ring: 'ring-2 ring-gray-400',
          hover: '',
        },
        noRunning: {
          bg: 'bg-white',
          text: 'text-red-500',
          ring: 'ring-2 ring-red-400',
        },
      },
    },
    descanso: {
      title: 'Descanso',
      textTime: 'text-green-500',
      buttonclicado:
        'ring-2 ring-green-500 text-green-600 hover:ring-green-500',
      button: {
        running: {
          bg: 'bg-green-500',
          text: 'text-white',
          hover: '',
          ring: 'hover:ring-green-500',
        },
        noRunning: {
          bg: 'bg-white',
          text: 'text-green-500',
          hover: '',
          ring: 'ring-2 ring-green-400',
        },
      },
    },
  }

  useEffect(() => {
    if (!isRunning) return
    let interval

    interval = setInterval(() => {
      setTime((prev) => {
        if (mode === 'normal') return prev + 1
        return prev > 0 ? prev - 1 : 0
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, mode])

  function initial() {
    setIsRunning((prev) => !prev)
  }

  function modeChange(novoModo) {
    setIsRunning(false)
    setMode(novoModo)
    setTime(MODE_CONFIG[novoModo])
    localStorage.setItem('mode', novoModo)
  }

  const modeStyles = themes[mode]
  const run = !isRunning
    ? modeStyles.button.running
    : modeStyles.button.noRunning
  return (
    <Section className="bg-bg-one">
      <div className="flex flex-col w-full gap-10  font-inter">
        <h1 className="text-center text-title font-bold text-4xl pb-10 md:text-5xl">
          Cronometro
        </h1>
        <div className="flex flex-row justify-center">
          {modos.map((modo) => (
            <button
              key={modo}
              className={`flex flex-row text-title justify-center text-xl items-center w-40 h-10 rounded-sm hover:scale-95 
                transition-all ease-out duration-350 hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent ${modo === mode ? modeStyles.buttonclicado : 'text-title'}`}
              onClick={() => modeChange(modo)}
            >
              {modo}
            </button>
          ))}
        </div>
        {/* <p><IoMdTime className="text-3xl text-left"/></p> */}
        <div className="flex flex-col justify-center items-center gap-7">
          <p key={time} className={`text-5xl font-bold ${modeStyles.textTime}`}>
            {String(Math.trunc(time / 3600)).padStart(2, '0')}:
            {String(Math.trunc((time % 3600) / 60)).padStart(2, '0')}:
            {String(Math.trunc((time % 3600) % 60)).padStart(2, '0')}
          </p>
          <div className="flex flex-row gap-5 py-5">
            <button
              className={`flex flex-row justify-center text-2xl items-center w-60 h-15 rounded-3xl hover:scale-98
                transition-transform duration-200 ${run.bg} ${run.text} ${run.ring} ${run.hover}`}
              onClick={initial}
            >
              {!isRunning ? (
                <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
              ) : (
                <PiStopCircle />
              )}
            </button>
            {console.log(mode)}
            {console.log(isRunning)}
          </div>
        </div>
      </div>
    </Section>
  )
}
