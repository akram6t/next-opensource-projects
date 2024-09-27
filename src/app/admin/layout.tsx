// make layout
import SidebarLayout from '@/components/admin/SidebarLayout'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
      <SidebarLayout>
        { children }
      </SidebarLayout>
  )
}