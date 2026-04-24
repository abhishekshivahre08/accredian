import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
  description:
    'Accredian Enterprise helps organizations upskill their teams with world-class programs in Data Science, AI, Product Management, and more. Partnered with IITs & IIMs.',
  keywords: 'enterprise learning, corporate training, upskilling, data science, AI, IIT, IIM, Accredian',
  openGraph: {
    title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
    description: 'World-class corporate training programs co-created with IITs & IIMs.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e1b4b',
              color: '#e0e7ff',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
            },
            success: { iconTheme: { primary: '#6366f1', secondary: '#e0e7ff' } },
          }}
        />
      </body>
    </html>
  )
}
