import { Metadata } from "next";
import { Sidebar } from "@components/sidebar";
import { Navbar } from "@components/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for managing your wallet",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Sidebar />
      <Navbar />
      <div className="mt-[72px] ml-[256px]">{children}</div>
    </main>
  );
}
