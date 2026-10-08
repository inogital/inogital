import { CheckCircle, Globe, LayoutGrid, Network, Printer, BookOpen } from "lucide-react"

import { DocsPage, DocsSection } from "@/components/common/docs-page"
import { FeatureCard } from "@/components/common/feature-card"
import { TalkToUs } from "@/components/common/talk-to-us"

export default function NPOsPage() {
  return (
    <DocsPage
      wide
      title="Technology that stays with the mission"
      lead="We work with nonprofits as a technology partner: the network, the devices, Google Workspace, and the simple systems programmes need."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          tone="indigo"
          icon={Network}
          title="Small office network"
          body="A setup sized for the office you have, so staff can work in the building without a network that only an outside technician understands."
        />
        <FeatureCard
          tone="green"
          icon={Printer}
          title="Computers and printers"
          body="Machines that are set up, named, and ready for the people who use them, including the printer everyone already depends on."
        />
        <FeatureCard
          tone="blue"
          icon={Globe}
          title="Google Workspace for nonprofits"
          body="Mail, files, and calendars on the organisation's domain, with shared drives that stay when a staff member moves on."
        />
        <FeatureCard
          tone="purple"
          icon={LayoutGrid}
          title="Web presence"
          body="A site that explains the work to people outside the organisation, and that your team can update."
        />
        <FeatureCard
          tone="orange"
          icon={BookOpen}
          title="Operational systems"
          body="The everyday tools for programmes: who has access, where the records live, and how a new staff member gets started."
        />
      </div>
      <DocsSection title="How we work with you">
        <p>
          At inOgital, we go beyond being just a service provider. We are your
          dedicated technology partner, committed to understanding your unique
          challenges and goals.
        </p>
        <ul className="space-y-3">
          {[
            "In-depth understanding of your goals",
            "Customized technology solutions",
            "Ongoing support and training",
            "Scalable solutions for growth",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle className="size-4 text-zinc-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Let&apos;s collaborate to create a technology strategy that empowers your
          mission.
        </p>
        <TalkToUs />
      </DocsSection>
    </DocsPage>
  )
}
