import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Lazada",
  description: "No.1 Shopping Online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
