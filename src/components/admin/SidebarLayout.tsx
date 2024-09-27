'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems, Transition, TransitionChild } from '@headlessui/react'
import { LayoutDashboard, FileCode, Users, MessageSquare, Settings, Menu as MenuIcon, X, TvIcon } from 'lucide-react'

const sidebarItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Projects', href: '/admin/projects', icon: FileCode },
  { name: 'Technologies', href: '/admin/technologies', icon: MessageSquare },
  { name: 'Technology Types', href: '/admin/technology-types', icon: Users },
  { name: 'Platforms', href: '/admin/platforms', icon: TvIcon },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between p-4">
        <Link href="/admin" className="text-2xl font-bold text-primary">Admin</Link>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-8 px-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            onClick={() => setSidebarOpen(false)}
            href={item.href}
            className={`flex items-center px-4 py-2 mt-2 text-sm rounded-lg ${
              pathname === item.href
                ? 'bg-primary text-background'
                : 'text-foreground hover:bg-base'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  )

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-card">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Transition show={sidebarOpen} as={React.Fragment}>
        <div className="fixed inset-0 z-40 lg:hidden">
          <TransitionChild
            as={React.Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-base bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          </TransitionChild>

          <TransitionChild
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative h-screen flex-1 flex flex-col max-w-xs bg-card">
              <SidebarContent />
            </div>
          </TransitionChild>
        </div>
      </Transition>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-card shadow-sm lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="text-foreground"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <Link href="/admin" className="text-2xl font-bold text-primary">Admin</Link>
            <Menu as="div" className="relative">
              <MenuButton className="flex text-sm rounded-full">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                />
              </MenuButton>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-card ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="#"
                        className={`${
                          focus ? 'bg-base' : ''
                        } block px-4 py-2 text-sm text-foreground`}
                      >
                        Profile
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="#"
                        className={`${
                          focus ? 'bg-base' : ''
                        } block px-4 py-2 text-sm text-foreground`}
                      >
                        Sign out
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}