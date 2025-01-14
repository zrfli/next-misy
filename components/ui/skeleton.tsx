import { cn } from "@/lib/utils"

function AuthFormSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ul className="space-y-2">
      <li>
        <div className={cn("animate-pulse p-6 w-full rounded-lg bg-neutral-300", className)}{...props} />
      </li>
      <li>
        <div className={cn("animate-pulse p-6 w-full rounded-lg bg-neutral-300", className)}{...props} />
      </li>
      <li>
        <div className={cn("animate-pulse p-6 w-full rounded-lg bg-neutral-300", className)}{...props} />
      </li>
    </ul>
  )
}

export { AuthFormSkeleton }
