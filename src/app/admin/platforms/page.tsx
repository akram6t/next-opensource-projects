'use client'

import React from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BreadCrump } from '@/components/ui/Breadcrump'

const platforms = [
  { id: 1, name: 'Web', projectCount: 15 },
  { id: 2, name: 'Mobile', projectCount: 8 },
  { id: 3, name: 'Desktop', projectCount: 3 },
  { id: 4, name: 'API', projectCount: 6 },
  { id: 5, name: 'Other', projectCount: 2 },
]

export default function PlatformsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Platforms</h1>
        <Link
          href="/admin/categories/new"
          className="flex items-center px-4 py-2 text-sm font-medium text-background bg-primary rounded-md hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Platform
        </Link>
      </div>

      <BreadCrump items={[
        {
          name: 'Dashboard',
          href: '/admin'
        },
        {
          name: 'Platforms',
        },
      ]}/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <div key={platform.id} className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">{platform.name}</h3>
            <p className="text-muted mb-4">{platform.projectCount} projects</p>
            <div className="flex justify-end space-x-2">
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