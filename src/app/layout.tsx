// File: app/layout.tsx
 
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';

 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Lumina – The Simplified Art of Productive Living",
  description: "Make each count with effortless organization, ensuring productivity and purpose every day."
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
      		<ClerkProvider>
            <div className="flex flex-col min-h-screen overflow-hidden">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              {/* <Footer /> */}
            </div>
            <Toaster />
      		</ClerkProvider>
        </body>
      </html>
  );
}