import DashboardLayout from '../../../components/DashboardLayout'

const NAV = [
  { icon: '🏠', label: 'Dashboard', href: '/dashboard/organization' },
  { icon: '🔍', label: 'Browse Available', href: '/dashboard/organization/browse' },
  { icon: '📋', label: 'My Requests', href: '/dashboard/organization/requests' },
  { icon: '🚚', label: 'Pickups', href: '/dashboard/organization/pickups' },
  { icon: '📊', label: 'Reports', href: '/dashboard/organization/reports' },
  { icon: '⚙️', label: 'Settings', href: '/dashboard/organization/settings' },
]

export default function OrganizationLayout({ children }) {
  return (
    <DashboardLayout role="organization" navItems={NAV}>
      {children}
    </DashboardLayout>
  )
}