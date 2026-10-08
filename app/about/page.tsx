import { DocsPage, DocsSection } from "@/components/common/docs-page"
import { siteConfig } from "@/config/site"
import { solutions } from "@/lib/data/solutions-data"

export default function AboutUsPage() {
  return (
    <DocsPage
      title="About"
      lead="inOgital is a leading provider of innovative digital solutions. ...cutting-edge technology solutions provider"
    >
      <DocsSection title="What we do">
        <p>{siteConfig.description}</p>
      </DocsSection>
      {solutions.map((sol) => (
        <DocsSection key={sol.id} title={sol.name}>
          <p>{sol.longDesc}</p>
        </DocsSection>
      ))}
    </DocsPage>
  )
}
