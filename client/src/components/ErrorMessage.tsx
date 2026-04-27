import type { PropsWithChildren } from "react"

export default function ErrorMessage({children}: PropsWithChildren) {

  return (
    <>
        <div className="my-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center font-semibold uppercase tracking-wide text-red-700 shadow-sm">
          {children}
        </div>
    </>
  )
}
