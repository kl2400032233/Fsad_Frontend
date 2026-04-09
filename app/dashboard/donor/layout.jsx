import DashboardLayout from "../../../components/DashboardLayout";

const NAV = [
  { label: "Dashboard", href: "/dashboard/donor" },
  { label: "My Donations", href: "/dashboard/donor/donations" },
  { label: "Schedule Pickup", href: "/dashboard/donor/schedule" },
  { label: "Impact Report", href: "/dashboard/donor/impact" },
  { label: "Settings", href: "/dashboard/donor/settings" },
];

export default function DonorLayout({ children }) {
  return (
    <DashboardLayout role="donor" navItems={NAV}>
      {children}
    </DashboardLayout>
  );
}