import logo from '../assets/react.svg'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const links = ['Contato', 'Como funciona', 'Saber mais', 'Home']
const recursos = ['Cronômetro', 'Organizar matérias', 'Progresso', 'Dashboard']

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-start w-full  bg-[#263238] font-inter text-white gap-5 py-16 px-10 ">
      <section className="flex flex-col gap-5 items-start">
        <img src={logo} alt="logo da plataforma" className="h-10 " />
        <p className="text-2xl text-white font-semi">Educação+</p>
        <p className="text-sm text-[#ABBED1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iure.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl">LINKS</h2>
        <div className="flex flex-row md:flex-col gap-3 text-sm text-[#ABBED1]">
          {links.map((link) => (
            <a href="#">{link}</a>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3 text-left">
        <h2 className="text-2xl">Recursos</h2>
        <div className="flex flex-row md:flex-col gap-3 text-sm text-[#ABBED1]">
          {recursos.map((recurso) => (
            <p>{recurso}</p>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-5 text-left">
        <h2 className="text-2xl ">SOCIAL</h2>
        <p className="text-sm text-[#ABBED1]">Ckmarques14@gmail.com</p>
        <div className="flex flex-row  justify-between">
          <a
            aria-label="Instagram"
            className="p-2 rounded-full bg-slate-700 hover:bg-[#2563EB] transition"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a className="p-2 rounded-full bg-slate-700 hover:bg-[#2563EB] transition">
            <FaGithub></FaGithub>
          </a>
          <a className="p-2 rounded-full bg-slate-700 hover:bg-[#2563EB] transition">
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </section>
    </footer>
  )
}
