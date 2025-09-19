import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbarr from "@/components/Navbarr/Navbarr";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Sakshi Power Yoga",
  description: "Find Your Inner Peace with Yoga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <Navbarr />
        {children}
      </body>
    </html>
  );
}
