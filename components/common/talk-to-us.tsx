import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function TalkToUs({
  className,
  variant = "secondary",
  label = "Talk to us",
}: {
  className?: string
  variant?: "default" | "secondary" | "outline" | "ghost"
  label?: string
}) {
  return (
    <Button asChild variant={variant} className={cn(className)}>
      <a href="mailto:info@inogital.com">{label}</a>
    </Button>
  )
}
