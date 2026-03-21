import { useRef, useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Pre({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  function copy() {
    const text = ref.current?.querySelector("code")?.textContent ?? ""
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-5">
      <pre
        ref={ref}
        className={cn("overflow-x-auto p-5 text-sm font-mono leading-relaxed", className)}
        {...props}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        title="Copy code"
        className="absolute right-3 top-3 flex h-7 w-7 cursor-pointer items-center justify-center border border-zinc-600 bg-zinc-800 text-zinc-400 opacity-0 transition-opacity hover:border-zinc-400 hover:text-white group-hover:opacity-100"
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 text-green-400" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}
