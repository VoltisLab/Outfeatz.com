
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/common/Nav";


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
        <title>OutFeatz</title>
        <meta name="description" content="Fashion Company" />
      </head>

      <body className={`bg-black`}>
        <div className="mx-auto max-w-[85rem] w-full">
          <main className="content bg-black w-full">
            <div className="nav-container">
              <Nav />
            </div>

            <div className="item-container mt-0">{children}</div>
            {/* <Footer /> */}
          </main>
        </div>
      </body>
    </html>
  );
}
