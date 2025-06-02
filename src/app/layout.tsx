import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

// Styles
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "DJ Mumbo - Electronic Dance Music Artist",
  description: "Official website of DJ Mumbo - Experience the fusion of EDM and playful vibes.",
  keywords: "DJ Mumbo, EDM, Electronic Dance Music, DJ Events, Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-background-primary">
        <PrimeReactProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
