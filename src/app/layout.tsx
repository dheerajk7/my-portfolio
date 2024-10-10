import { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Dheeraj Kushwah | Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ibm">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
