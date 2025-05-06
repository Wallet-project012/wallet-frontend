import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

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
      <Navbar />
      <div className="flex flex-wrap w-full h-screen overflow-hidden bg-primary-400 dark:bg-dark-500">
        <Sidebar />
        <div className="mt-[72px] p-2 grow bg-light-400 h-[calc(100vh-72px)] overflow-y-auto dark:bg-dark-500">
          {children}
        </div>
      </div>
    </main>
  );
}
