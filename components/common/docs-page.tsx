import { cn } from "@/lib/utils"

export function DocsPage({
  title,
  lead,
  children,
  wide = false,
}: {
  title: string
  lead: string
  children?: React.ReactNode
  wide?: boolean
}) {
  return (
    <article
      className={cn(
        "mx-auto w-full px-6 py-16 md:py-24",
        wide ? "max-w-6xl" : "max-w-3xl"
      )}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-600">{lead}</p>
      {children ? <div className="mt-12 space-y-12">{children}</div> : null}
    </article>
  )
}

export function DocsSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-700">
        {children}
      </div>
    </section>
  )
}
