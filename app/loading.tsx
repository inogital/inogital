export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16">
      <p className="text-sm text-zinc-500">Loading...</p>
      <div
        className="size-8 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
