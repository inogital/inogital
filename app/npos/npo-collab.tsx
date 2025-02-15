import { CheckCircle } from "lucide-react"

export default function NPOCollab() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Collaborative Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
          <div>
            <p className="text-lg mb-4">
              At inOgital, we go beyond being just a service provider. We are your dedicated technology partner,
              committed to understanding your unique challenges and goals.
            </p>
            <p className="text-lg">
              Our team works closely with your non-profit to devise tailored tech solutions that align perfectly with
              your mission and objectives.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {[
                "In-depth understanding of your goals",
                "Customized technology solutions",
                "Ongoing support and training",
                "Scalable solutions for growth",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}