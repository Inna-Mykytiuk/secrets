import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = {
  title: "Uncover Carpathian’s Secrets",
  description: "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
};

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
