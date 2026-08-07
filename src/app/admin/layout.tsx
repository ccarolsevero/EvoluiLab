import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | EvoluiLab",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh bg-ink text-mist antialiased">{children}</div>
  );
}
