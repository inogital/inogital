import NPOServices from "./npo-services";
import NPOCTA from "./npo-cta";
import NPOCollab from "./npo-collab";

export default function NPOsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Technology Solutions for Non-Profits
        </h1>
        <p className="text-xl mb-8">
          inOgital: Your Dedicated Technology Partner
        </p>
      </section>
      <NPOServices />
      <NPOCollab />
      <NPOCTA />
    </main>
  );
}
