import Counter from '../animated/ui/Counter'
export default function StartCard({ icon, text, number, inview }) {
  const Icon = icon
  return (
    <div className="flex flex-row items-center gap-2">
      <Icon className="text-[#2563EB] min-w-10 h-10" />

      <div className="flex flex-col items-start">
        <Counter inview={inview} number={number}></Counter>
        <p className="text-sm text-text ">{text}</p>
      </div>
    </div>
  )
}
