import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Network, Printer, Globe, LayoutGrid, BookOpen } from "lucide-react";

const services = [
  {
    title: "Small Office Network Setup",
    icon: Network,
    textColor: "text-slate-600",
  },
  {
    title: "Computer & Printer Setup",
    icon: Printer,
    textColor: "text-green-600",
  },
  {
    title: "Google Workspace for Non-Profits",
    icon: Globe,
    textColor: "text-amber-600",
  },
  { title: "Web Development", icon: LayoutGrid, textColor: "text-blue-600" },
  {
    title: "Operational Systems Setup",
    icon: BookOpen,
    textColor: "text-red-600",
  },
];

export default function NPOServices() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className={cn("mr-2 h-6 w-6", `${service.textColor}`)} />
                <Badge
                  variant="secondary"
                  className={cn(
                    "text-sm font-semibold px-3 py-1",
                    `${service.textColor}`
                  )}
                >
                  {" "}
                  {service.title}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Customized solutions to meet your non-profit&lsquo;s specific needs.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
