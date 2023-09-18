import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Washing machine base",
  description:
    "Washer Dryer Fridge Stand Movable Base - Washing Machine Refrigerator Base Stand Bracket Fridge Washing Machine Trolley Bracket Mount Convenient Movable Adjustable (Silver)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
