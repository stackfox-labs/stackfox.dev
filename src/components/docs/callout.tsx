import { AlertTriangleIcon, CheckCircleIcon, InfoIcon, XCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type CalloutType = "tip" | "warning" | "danger" | "info"

const variants: Record<
  CalloutType,
  { icon: React.ComponentType<{ className?: string }>; label: string; className: string }
> = {
  tip: {
    icon: CheckCircleIcon,
    label: "Tip",
    className:
      "border-green-300 bg-green-50 text-green-900 [&_.ci]:text-green-600 [&_.cl]:text-green-700",
  },
  warning: {
    icon: AlertTriangleIcon,
    label: "Warning",
    className:
      "border-amber-300 bg-amber-50 text-amber-900 [&_.ci]:text-amber-600 [&_.cl]:text-amber-700",
  },
  danger: {
    icon: XCircleIcon,
    label: "Danger",
    className:
      "border-red-300 bg-red-50 text-red-900 [&_.ci]:text-red-600 [&_.cl]:text-red-700",
  },
  info: {
    icon: InfoIcon,
    label: "Note",
    className:
      "border-blue-300 bg-blue-50 text-blue-900 [&_.ci]:text-blue-600 [&_.cl]:text-blue-700",
  },
}

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon: Icon, label, className } = variants[type]
  return (
    <div className={cn("my-5 border-l-4 p-4", className)}>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon className="ci h-4 w-4 shrink-0" />
        <span className="cl text-xs font-bold uppercase tracking-wider">{title ?? label}</span>
      </div>
      <div className="text-sm leading-6 [&>p:last-child]:mb-0 [&>p]:mb-2">{children}</div>
    </div>
  )
}
