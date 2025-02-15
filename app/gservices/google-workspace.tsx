"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RequestForm from "@/components/common/request-form"
import { workspaceOptions } from "./gworkspace-data"

const GoogleWorkspace = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-2">
              Transform your workplace
            </h2>
            <h3 className="text-3xl font-bold mb-4">Google WorkSpace</h3>
            <p className="text-blue-100 mb-6">
              A cloud based platform that comes with easy to use, familiar and secure tools for your organization.
            </p>
            <RequestForm />
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              {workspaceOptions.map((option, index) => (
                <Card key={index} className="bg-white/10 border-none">
                  <CardHeader>
                    <CardTitle className="text-blue-200">{option.title}</CardTitle>
                    <CardDescription className="text-blue-100">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-white">{option.subtitle}</h4>
                    <p className="text-sm mb-4 text-blue-100">{option.content}</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-blue-100">
                      {option.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleWorkspace