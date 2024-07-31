import { Sidebar } from "@/features/shared/presenters/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Sidebar />
      <main className="">
        {children}
      </main>
    </div>
  )
}