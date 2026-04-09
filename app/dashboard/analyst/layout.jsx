import DashboardLayout from "../../../components/DashboardLayout";

const NAV = [
  { label: "Dashboard", href: "/dashboard/analyst" },
  { label: "Waste Trends", href: "/dashboard/analyst/waste-trends" },
  { label: "Geo Analysis", href: "/dashboard/analyst/geo-analysis" },
  { label: "Reports", href: "/dashboard/analyst/reports" },
  { label: "Insights", href: "/dashboard/analyst/insights" },
];

export default function AnalystLayout({ children }) {
  return (
    <DashboardLayout role="analyst" navItems={NAV}>
      {children}
    </DashboardLayout>
  );
}