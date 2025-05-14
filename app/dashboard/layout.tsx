import { Metadata } from 'next';
import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { getUserOrRedirect } from '@/utils/get-user-or-redirect';
import LogoutButton from '@/components/buttons/LogoutButton';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard for managing your wallet',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // after backend set up
  // const user = await getUserOrRedirect();

  return (
    <main className="w-full">
      <LogoutButton />
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
