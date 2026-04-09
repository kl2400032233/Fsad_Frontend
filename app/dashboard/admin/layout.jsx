import DashboardLayout from '../../../components/DashboardLayout'

const NAV = [
  { icon: '🏠', label: 'Dashboard', href: '/dashboard/admin' },
  { icon: '👥', label: 'User Management', href: '/dashboard/admin/users' },
  { icon: '📦', label: 'Donations', href: '/dashboard/admin/donations' },
  { icon: '🏢', label: 'Organizations', href: '/dashboard/admin/organizations' },
  { icon: '📊', label: 'Analytics', href: '/dashboard/admin/analytics' },
  { icon: '🛡️', label: 'Compliance', href: '/dashboard/admin/compliance' },
  { icon: '🔔', label: 'Notifications', href: '/dashboard/admin/notifications' },
  { icon: '⚙️', label: 'Settings', href: '/dashboard/admin/settings' },
]

export default function AdminLayout({ children }) {
  return (
    <DashboardLayout role="admin" navItems={NAV}>
      {children}
    </DashboardLayout>
  )
}
