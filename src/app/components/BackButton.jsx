'use client'

import { useRouter } from 'next/navigation'

export default function BackButton({ className = '' }) {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={() => router.back()}
      className={`flex h-9 w-10 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 transition hover:bg-gray-50 ${className}`}
      aria-label='بازگشت'
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
        <path d='M9 14 4 9l5-5' />
        <path d='M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11' />
      </svg>
    </button>
  )
}
