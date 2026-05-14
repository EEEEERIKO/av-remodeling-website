import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Av Remodeling | Premium Home Remodeling",
  description: "Premium home remodeling and luxury renovation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
