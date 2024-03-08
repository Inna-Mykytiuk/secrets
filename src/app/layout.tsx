import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = {
  title: 'CarpTravel',
  description: "Uncover Carpathian’s Secrets",
  icons: [
    {
      url: '/icons/favicon-dark.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon-light.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://https://secrets-tan.vercel.app/',
    title: 'CarpTravel',
    description: 'Uncover Carpathian’s Secrets',
    siteName: 'CarpTravel',
    images: [{ url: '/ogp/logo.jpg' }, { url: '/ogp/logo.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className='overflow-hidden flex flex-1 flex-col'>
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
              },
              duration: 2500,
            }}
          /></main>
      </body>
    </html>
  );
}
