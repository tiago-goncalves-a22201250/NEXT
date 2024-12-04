import React from 'react';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
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