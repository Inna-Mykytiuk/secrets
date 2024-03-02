import type { Metadata } from "next";
import "../styles/globals.css";


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
        <main className='overflow-hidden flex flex-1 flex-col'>{children}</main>
      </body>
    </html>
  );
}
