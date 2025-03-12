import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ['100','400','700'],
})

export const metadata = {
  title: "Portafolio",
  description: "Luis Arguello Lopez",
  icons: {
    icon: '/favicon.ico',  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
  
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
