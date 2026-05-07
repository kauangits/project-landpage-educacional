import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './Testimonials.css'
import Section from '../components/ui/Section'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const comments = [
  {
    testimonials:
      'Depois que comecei a usar a plataforma, consegui manter uma rotina diária de estudos sem me perder.',
    name: 'Carlos Kauan',
    curse: 'Ciências da Computação',
    university: 'UFCA',
  },
  {
    testimonials:
      'A organização por tarefas e metas semanais me ajudou muito a não procrastinar.',
    name: 'Mariana Alves',
    curse: 'Engenharia de Software',
    university: 'UFPA',
  },
  {
    testimonials:
      'Antes eu estudava sem direção. Agora consigo ver claramente meu progresso.',
    name: 'Lucas Pereira',
    curse: 'Sistemas de Informação',
    university: 'IFCE',
  },
  {
    testimonials:
      'A interface é simples e direta, exatamente o que eu precisava para focar nos estudos.',
    name: 'Ana Beatriz',
    curse: 'Análise e Desenvolvimento de Sistemas',
    university: 'UNIFOR',
  },
  {
    testimonials:
      'Comecei usando só para testar e hoje faz parte da minha rotina diária.',
    name: 'João Victor',
    curse: 'Ciência da Computação',
    university: 'UFRN',
  },
  {
    testimonials:
      'Me ajudou a equilibrar faculdade, estudos extras e projetos pessoais.',
    name: 'Fernanda Rocha',
    curse: 'Engenharia da Computação',
    university: 'UFCG',
  },
  {
    testimonials:
      'Finalmente encontrei uma ferramenta que não me distrai enquanto estudo.',
    name: 'Rafael Mendes',
    curse: 'Sistemas de Informação',
    university: 'IFPI',
  },
  {
    testimonials:
      'O controle de progresso me motiva a estudar um pouco todos os dias.',
    name: 'Isabela Santos',
    curse: 'Ciência de Dados',
    university: 'UNICAMP',
  },
  {
    testimonials:
      'Simples, funcional e muito eficiente para quem quer criar consistência.',
    name: 'Pedro Henrique',
    curse: 'Engenharia de Software',
    university: 'PUCPR',
  },
]

export default function Comments() {
  return (
    <Section className="bg-bg-two">
      <div className="flex flex-col gap-15 font-inter">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-title">
            O que os nosso usuários dizem
          </h1>
          <p className="text-sm text-text">
            Depoimentos de quem já melhorou sua rotina
          </p>
        </div>
        <section className="testimonials-swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index} className="">
                <div className="flex flex-col justify-between bg-bg-one p-6 mt-8 rounded-xl h-58 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-sm italic text-text leading-relaxed relative">
                    {' '}
                    <span className="text-5xl text-blue-400/30 absolute -top-4 -left-3">
                      “
                    </span>
                    {comment.testimonials}
                  </p>
                  <div className="flex flex-row items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
                      {comment.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-title">
                        {comment.name}
                      </p>
                      <p className="text-xs text-text">{comment.university}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </Section>
  )
}
