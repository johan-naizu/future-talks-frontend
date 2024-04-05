import type { Metadata } from "next";
import "./globals.scss";
import { inter } from "@/fonts";
import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import { CourseContextProvider } from "@/Context";


export const metadata: Metadata = {
  title: "Future Talks",
  description: "Bridging Student Passion with Professional Insight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative z-0`}>
        <CourseContextProvider>
          <Navbar />
          {children}
          <Footer />
        </CourseContextProvider>
      </body>
    </html>
  );
}
