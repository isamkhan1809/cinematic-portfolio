import './globals.css'

export const metadata = {
  title: 'Isam Khan — Junior AI Engineer',
  description: 'AI/ML Engineer building generative AI pipelines, agentic workflows, and intelligent systems. Based in London, UK.',
  keywords: 'AI Engineer, ML Engineer, LLM, Generative AI, MCP Server, London',
  openGraph: {
    title: 'Isam Khan — Junior AI Engineer',
    description: 'Building generative AI pipelines, agentic workflows, and intelligent systems.',
    url: 'https://isamkhan.com',
    siteName: 'Isam Khan Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06090e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
