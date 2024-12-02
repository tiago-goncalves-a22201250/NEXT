import "./globals.css";
import Header from "./components/Header/page.jsx";
import Footer from "./components/Footer/page.jsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body> {children} </body>
      <Footer />
    </html>
  );
}
