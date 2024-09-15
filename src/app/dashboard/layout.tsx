import { SideNav } from "./side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container -ml-1.5 pt-8 min-h-screen">
      <div className="flex gap-8">
        <SideNav />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
