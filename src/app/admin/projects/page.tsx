'use client'

import React from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BreadCrump } from '@/components/ui/Breadcrump'

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'Web', technologies: ['React', 'Node.js', 'MongoDB'] },
  { id: 2, title: 'Task Management App', category: 'Mobile', technologies: ['React Native', 'Firebase'] },
  { id: 3, title: 'Blog CMS', category: 'Web', technologies: ['Next.js', 'GraphQL', 'PostgreSQL'] },
  // Add more projects as needed
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="flex items-center px-4 py-2 text-sm font-medium text-background bg-primary rounded-md hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Project
        </Link>
      </div>

      <BreadCrump items={[
        {
          name: 'Dashboard',
          href: '/admin'
        },
        {
          name: 'Projects',
        },
      ]}/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted mb-2">Category: {project.category}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-medium bg-base text-foreground rounded-full">
                  {tech}
                </span>
              ))}
            </div>
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