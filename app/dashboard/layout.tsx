"use client";

import "../globals.css";

import HeaderNav from "@/components/dashboard-header";
import Sidebar from "@/components/sidebar";
import { useState } from "react";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    
    <main className="h-screen w-full dm">
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="md:flex-1 flex flex-col md:ml-64  transition-all duration-300">
        <HeaderNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main className="md:flex-1   ">
          <div className="space-y-6">
            {/* Replace this with your actual dashboard widgets or pages */}
            {children}
          </div>
        </main>
      </div>
    </main>
  );
}
