import { Building2, GraduationCap, HeartHandshake } from "lucide-react"

import { DocsPage, DocsSection } from "@/components/common/docs-page"
import { FeatureCard } from "@/components/common/feature-card"
import { TalkToUs } from "@/components/common/talk-to-us"
import { workspaceOptions } from "./gworkspace-data"

const tones = ["blue", "green", "purple"] as const
const icons = [GraduationCap, HeartHandshake, Building2]

export default function GoogleServicesPage() {
  return (
    <DocsPage
      wide
      title="Google Workspace, ready for the people who use it"
      lead="We set up Google Workspace so a school, nonprofit, or small business can share mail, files, and calendars on one domain from the first day."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {workspaceOptions.map((option, index) => (
          <FeatureCard
            key={option.title}
            tone={tones[index] ?? "blue"}
            icon={icons[index]}
            title={option.description}
            body={`${option.content} ${option.features.join(". ")}.`}
          />
        ))}
      </div>
      <DocsSection title="What we put in place">
        <p>
          Accounts for everyone who needs one, a domain that belongs to the
          organisation, shared drives instead of personal folders, and a short
          handover so your own people can run it.
        </p>
        <TalkToUs />
      </DocsSection>
    </DocsPage>
  )
}
