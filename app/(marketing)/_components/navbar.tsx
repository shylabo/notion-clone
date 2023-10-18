'use client'

import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { ModeToggle } from '@/components/mode-toggle'

export const Navbar = () => {
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'flex items-center fixed top-0 z-50 w-full bg-background dark:bg-[#1F1F1F] p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="w-full flex justify-between items-center md:justify-end gap-x-2 md:ml-auto">Login</div>
      <ModeToggle />
    </div>
  )
}
