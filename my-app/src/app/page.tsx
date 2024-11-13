import Navbar from "@/components/Navbar";
import Banner from "@/components/Benner";
import { getFeaturedProducts, ProductModel } from "@/db/models/product";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default async function Home() {
  const products: ProductModel[] = await getFeaturedProducts();

  return (
    <div>
      <Navbar />
      <main className="flex flex-col py-5 px-20 gap-8 items-center mt-20 bg-white">
        <Banner />
        <FeaturedProducts products={products} />
      </main>
      <Footer />
    </div>
  );
}
