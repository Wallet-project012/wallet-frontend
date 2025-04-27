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
    <main className="w-full">
      <Sidebar />
      <Navbar />
      <div className="mt-[72px] w-full p-2 bg-light-400 h-[calc(100vh-72px)] overflow-y-auto dark:bg-dark-500">
        {children}
      </div>
    </main>
  );
}
