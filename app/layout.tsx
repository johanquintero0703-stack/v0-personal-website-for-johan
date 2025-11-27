import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Usando Inter para un diseño más profesional y moderno
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Metadatos personalizados para Johan Quintero
  title: "Johan Quintero - Página Personal",
  description:
    "Página personal de Johan Quintero, estudiante de Ingeniería Biomédica. Conoce más sobre mí, mis hobbies, datos curiosos y proyectos futuros.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
