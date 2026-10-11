import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ryhar.my.id"),
  title: {
    default: "Amira | Portfolio",
    template: "%s | Amira Portfolio",
  },
  description: "Personal portfolio of Amira. Software Developer specializing in Next.js, Node.js, and modern web development.",
  keywords: ["Amira", "Portfolio", "Part Timer", "Counselor", "Teacher"],
  authors: [{ name: "Amira" }],
  creator: "Amira",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Mira| Portfolio",
    description: "Personal portfolio of Amira. Counselor, Teacher, Part Timer",
    siteName: "Amira Portfolio",
    images: [
      {
        url: "/images/foto awal.jpg",
        width: 1200,
        height: 630,
        alt: "Mira Portfolio",
      },
    ],
  },
  icons: {
    icon: "/images/foto awal.jpg",
    shortcut: "/images/foto awal.jpg",
    apple: "/images/foto awal.jpg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

