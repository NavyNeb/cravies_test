
type Props = { index: number; title: string; className?: string }

function SectionLabel({ index, title, className = "" }: Props) {
    return (
      <div className={`my-4 flex items-center gap-4 ${className}`}>
        <div className="h-7 w-7 flex items-center justify-center rounded-full bg-black-app text-base text-white font-bold">
          <span className="block" >{index}</span>
        </div>
        <div className="text-[26px] sm:text-[32px] font-wosker text-black-app tracking-wide">{title}</div>
      </div>
    );
  }

export default SectionLabel