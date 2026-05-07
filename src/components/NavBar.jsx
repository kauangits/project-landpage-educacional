import { useState } from 'react'
import logo from '../assets/react.svg'
import { FiArrowRight } from 'react-icons/fi'
import { MdOutlineMenu } from 'react-icons/md'
import { IoIosClose } from 'react-icons/io'
import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Como Funciona', href: '#' },
  { label: 'Contato', href: '#' },
]

export default function NavBar() {
  let [open, setOpen] = useState(false)
  let { theme, toggleTheme } = useContext(ThemeContext)
  {
    console.log(theme)
  }
  return (
    <header className="fixed left-0 w-full bg-bg-one backdrop-blur z-50 border-b border-bg-one">
      <nav className="flex flex-row justify-between items-center px-10 h-20">
        <img
          src={logo}
          alt="logo"
          className="hover:scale-110
        transition-transform duration-300"
        />

        <ul className="hidden md:flex md:flex-row items-center gap-5 text-text font-medium font-inter">
          <button
            className={`flex justify-center items-center w-10 h-10 bg-primary rounded-full shadow-md `}
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <MdOutlineDarkMode className="w-5 h-5 text-black"></MdOutlineDarkMode>
            ) : (
              <CiLight className="w-5 h-5 text-white"></CiLight>
            )}
          </button>
          {navItems.map((item) => (
            <li key={item.label} className="">
              <a
                href={item.href}
                className="hover:text-blue-600 focus:text-blue-600 transition-all hover:opacity-50  duration-300 "
              >
                {item.label}
              </a>
            </li>
          ))}

          <button
            className="flex flex-row justify-center items-center text-white bg-[#2563EB] w-25 h-10 rounded-sm gap hover:scale-95
                transition-transform duration-150"
          >
            CTA <FiArrowRight className="w-5 h-5" />
          </button>
        </ul>
        {/* para mobile */}
        <button
          className="md:hidden text-2xl hover:scale-90
            transition-transform duration-150 text-title"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoIosClose /> : <MdOutlineMenu />}
        </button>

        <ul
          className={`md:hidden absolute right-7 top-full w-52 text-center
        bg-white rounded-xl shadow-xl
         transition-all duration-300 ease-in-out
         ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
        >
          <div className="absolute -top-2 right-3 w-3 h-3 p-3 bg-white rotate-45 border-l border-t"></div>

          {navItems.map((item) => (
            <li
              key={item.label}
              className="border-b
                    border-text last:border-none"
            >
              <a href={item.href} className="block px-4 py-3">
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <button className="w-full text-black py-2 rounded-lg hover:bg-blue-700 transition">
              CTA
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
