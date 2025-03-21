
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OutFeatz",
  description: "Fashion Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <title>OutFeatz</title>
        <meta name="description" content="Fashion Company" />
      </head>

      <body className={`bg-black`}>
        <div className="mx-auto max-w-[85rem] w-full">
          <main className="content bg-black w-full">
            <div className="nav-container">
              <Nav  />
            </div>

            <div className="item-container mt-0">{children}</div>
            {/* <Footer /> */}
          </main>
        </div>
      </body>
    </html>
  );
}
