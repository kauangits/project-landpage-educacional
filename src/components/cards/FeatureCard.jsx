export default function FeatureCard({ icon, text, description }) {
  const Icon = icon
  return (
    <div className="flex flex-col justify-around bg-bg-one shadow-sm rounded-xl p-8 min-h-70 duration-400 translate-all hover:shadow-lg hover:-translate-y-1.5 hover:ring-1 hover:ring-blue ease-out">
      <p className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-5 h-5  text-white"></Icon>
      </p>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-title mb-2">{text}</h2>
        <p className=" text-text max-w-[35ch] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
