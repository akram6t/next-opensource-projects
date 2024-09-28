'use client'

import React from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BreadCrump } from '@/components/ui/Breadcrump'

const stacks = [
  { id: 1, name: 'Frontend', projectCount: 15 },
  { id: 2, name: 'Backend', projectCount: 8 },
  { id: 3, name: 'Full Stack', projectCount: 3 },
  { id: 4, name: 'Mobile', projectCount: 6 },
  { id: 5, name: 'Other', projectCount: 2 },
]

export default function StacksPage() {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Categories</h1>
          <Link
            href="/admin/categories/new"
            className="flex items-center px-4 py-2 text-sm font-medium text-background bg-primary rounded-md hover:bg-primary/90"
          >
            <Plus className="w-5 h-5 mr-2" /> 
            Add New Category
          </Link>
        </div>

        <BreadCrump items={[
        {
          name: 'Dashboard',
          href: '/admin'
        },
        {
          name: 'Technology Types',
        },
      ]}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((category) => (
            <div key={category.id} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
              <p className="text-muted mb-4">{category.projectCount} projects</p>
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
    </>
  )
}