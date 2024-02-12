// export interface NoteCardProps {}

export function NoteCard() {
  return (
    <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        officia iusto sed dicta dolorem, cum tempora nam beatae ad. Magnam
        quidem distinctio porro molestiae consequatur odit ipsam quos, labore
        repellat? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Delectus officia iusto sed dicta dolorem, cum tempora nam beatae ad.
        Magnam quidem distinctio porro molestiae consequatur odit ipsam quos,
        labore repellat?
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </div>
  )
}
