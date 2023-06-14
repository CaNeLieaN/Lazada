import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import ProductCards from "./components/products/ProductCards";
import Carousel from "./components/navbar/Carousel";
import Categories from "./components/navbar/Categories";

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
        <main className="flex flex-col">
          <Container>
            <div className="mt-40">
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
        grid
        grid-cols-1
        sm:grid-cols-3
        md:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-[20px]
        bg-white
        
        "
            >
              <ProductCards />
              <ProductCards />
              <ProductCards />
              <ProductCards />
              <ProductCards />
              <ProductCards />
            </div>
          </Container>
          {children}
        </main>
      </body>
    </html>
  );
}
