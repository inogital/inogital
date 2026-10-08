import { Cable, ShieldCheck, Wifi } from "lucide-react"

import { DocsPage } from "@/components/common/docs-page"
import { FeatureCard } from "@/components/common/feature-card"

export default function NetworkEngineeringPage() {
  return (
    <DocsPage
      wide
      title="A network the building can rely on"
      lead="We design, install, and look after connectivity for schools, nonprofits, and small offices: Wi-Fi that covers the rooms people actually use, and a layout that stays secure as more devices come online."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          tone="green"
          icon={Wifi}
          title="Coverage where people work"
          body="Classrooms, labs, and offices get a signal that holds when a whole group connects at once, not only a strong reading next to the router."
        />
        <FeatureCard
          tone="blue"
          icon={Cable}
          title="Wired where it matters"
          body="Labs, printers, and shared machines sit on a wired path so the everyday tools do not compete with everyone's phone."
        />
        <FeatureCard
          tone="indigo"
          icon={ShieldCheck}
          title="Access you can explain"
          body="Staff, learners, and guests are separated. You know who is on the network, and a new person can be added without opening everything."
        />
      </div>
    </DocsPage>
  )
}
