import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const tones = {
  blue: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.45),transparent_42%),linear-gradient(160deg,#0b1220,#1e3a8a)]",
    title: "text-sky-50",
    body: "text-sky-100/80",
    button: "bg-sky-100 text-slate-900 hover:bg-white",
    icon: "bg-sky-400/20 text-sky-100",
  },
  green: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.35),transparent_40%),linear-gradient(160deg,#052e16,#166534)]",
    title: "text-emerald-50",
    body: "text-emerald-100/80",
    button: "bg-emerald-400 text-emerald-950 hover:bg-emerald-300",
    icon: "bg-emerald-400/20 text-emerald-100",
  },
  purple: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.4),transparent_42%),linear-gradient(160deg,#2e1064,#581c87)]",
    title: "text-fuchsia-50",
    body: "text-fuchsia-100/80",
    button: "bg-white text-purple-950 hover:bg-fuchsia-100",
    icon: "bg-fuchsia-400/20 text-fuchsia-100",
  },
  pink: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.4),transparent_42%),linear-gradient(160deg,#3b0764,#9d174d)]",
    title: "text-pink-50",
    body: "text-pink-100/80",
    button: "bg-pink-400 text-pink-950 hover:bg-pink-300",
    icon: "bg-pink-400/20 text-pink-100",
  },
  orange: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.45),transparent_42%),linear-gradient(160deg,#431407,#c2410c)]",
    title: "text-orange-50",
    body: "text-orange-100/80",
    button: "bg-orange-400 text-orange-950 hover:bg-orange-300",
    icon: "bg-orange-400/20 text-orange-100",
  },
  indigo: {
    card: "bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.4),transparent_42%),linear-gradient(160deg,#0f172a,#312e81)]",
    title: "text-indigo-50",
    body: "text-indigo-100/80",
    button: "bg-indigo-300 text-indigo-950 hover:bg-indigo-200",
    icon: "bg-indigo-400/20 text-indigo-100",
  },
} as const

export type FeatureTone = keyof typeof tones

export function FeatureCard({
  title,
  body,
  href,
  label,
  tone,
  icon: Icon,
}: {
  title: string
  body: string
  href?: string
  label?: string
  tone: FeatureTone
  icon?: LucideIcon
}) {
  const style = tones[tone]

  return (
    <article
      className={cn(
        "flex min-h-56 flex-col justify-between rounded-2xl border border-black/10 p-6 shadow-sm",
        style.card
      )}
    >
      <div>
        {Icon ? (
          <div
            className={cn(
              "mb-4 flex size-10 items-center justify-center rounded-xl",
              style.icon
            )}
          >
            <Icon className="size-5" />
          </div>
        ) : null}
        <h3 className={cn("text-xl font-semibold tracking-tight", style.title)}>
          {title}
        </h3>
        <p className={cn("mt-2 text-sm leading-relaxed", style.body)}>{body}</p>
      </div>
      {href && label ? (
        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex w-fit items-center gap-1 rounded-full px-4 py-2 text-sm font-medium",
            style.button
          )}
        >
          {label}
          <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </article>
  )
}
