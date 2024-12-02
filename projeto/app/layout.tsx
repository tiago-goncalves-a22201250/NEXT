import React from 'react'
import Header from '../Header/page.jsx'
import Footer from '../Footer/page.jsx'
import './globals.css';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}