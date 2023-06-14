import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import ProductInfo from "./components/products/ProductInfo";
import Carousel from "./components/navbar/Carousel";
import Categories from "./components/navbar/Categories";
import Promotion from "./components/footer/promotion";
import AboutLazada from "./components/footer/aboutLazada";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col bg-[#f5f5f5]">
          <Container>
            <div className="mt-40 bg-black">
              <Carousel />
            </div>
          </Container>
          <Container>
            <div className="mt-10">
              <Categories />
            </div>
          </Container>
          <Container>
            Flash Sale
            <div
              className="
        pt-10
        gap-[20px]
        bg-white
        "
            >
              <ProductInfo />
            </div>
          </Container>
          {children}
        </main>
        <Promotion />
        <AboutLazada />
      </body>
    </html>
  );
}
