"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function SearchBox() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("query") || ""

  const [query, setQuery] = useState(initialQuery)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (!isFocused) return

    const isQueryValid = query.trim() !== ""

    const timeout = setTimeout(() => {
      if (isQueryValid && pathname !== "/search") {
        router.push(`/search?query=${encodeURIComponent(query)}`)
      } else if (!isQueryValid && pathname === "/search") {
        router.push("/")
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [query, pathname, router, isFocused])



  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="جست‌وجو"
        className="h-10 w-full rounded-xl border border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-sm transition focus:border-sorkhabi focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-100 sm:h-11"
        value={query}
        onChange={(e) =>setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 300)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </div>
  )
}
