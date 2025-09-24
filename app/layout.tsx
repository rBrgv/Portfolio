import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RB Consulting - Bhargav Ramesh | Salesforce Marketing Cloud & Data Cloud Expert",
  description: "Bhargav Ramesh - Former Salesforce employee turned Marketing Cloud & Data Cloud consultant. I help teams ship reliable, measurable lifecycle programs across retail, manufacturing, and healthcare.",
  keywords: ["Bhargav Ramesh", "Salesforce", "Marketing Cloud", "Data Cloud", "Consultant", "Lifecycle Marketing", "Retail", "Manufacturing", "Healthcare"],
  authors: [{ name: "Bhargav Ramesh" }],
  openGraph: {
    title: "RB Consulting - Bhargav Ramesh | Salesforce Marketing Cloud & Data Cloud Expert",
    description: "Bhargav Ramesh - Former Salesforce employee turned Marketing Cloud & Data Cloud consultant. I help teams ship reliable, measurable lifecycle programs across retail, manufacturing, and healthcare.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js" async></script>
      </head>
        <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${dancingScript.variable} font-sans antialiased`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <CustomCursor />
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 pt-16">
                  {children}
                </main>
                <Footer />
              </div>
            </ThemeProvider>
      </body>
    </html>
  );
}
