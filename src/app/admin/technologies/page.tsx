'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Plus, Edit, Trash2 } from 'lucide-react'
import { BreadCrump } from '@/components/ui/Breadcrump'

const technologies = [
  { id: 1, name: 'React', category: 'Frontend', icon: '⚛️' },
  { id: 2, name: 'Node.js', category: 'Backend', icon: '🟩' },
  { id: 3, name: 'MongoDB', category: 'Database', icon: '🍃' },
  { id: 4, name: 'Python', category: 'Backend', icon: '🐍' },
  { id: 5, name: 'Vue.js', category: 'Frontend', icon: '🟩' },
  { id: 6, name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  // Add more technologies as needed
]

export default function TechnologiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Technologies</h1>
        <Link
          href="/admin/technologies/new"
          className="flex items-center px-4 py-2 text-sm font-medium text-background bg-primary rounded-md hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Technology
        </Link>
      </div>

      <BreadCrump items={[
        {
          name: 'Dashboard',
          href: '/admin'
        },
        {
          name: 'Technologies',
        },
      ]}/>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div key={tech.id} className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center">
            <span className="text-4xl mb-2">{tech.icon}</span>
            <h3 className="text-lg font-semibold text-foreground mb-1">{tech.name}</h3>
            <p className="text-muted text-sm mb-4">{tech.category}</p>
            <div className="flex justify-center space-x-2 mt-auto">
              <button className="p-2 text-primary hover:bg-base rounded-md">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 text-accent hover:bg-base rounded-md">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}