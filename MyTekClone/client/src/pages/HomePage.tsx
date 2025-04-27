import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PromoGaming from "@/components/PromoGaming";
import PromoTVs from "@/components/PromoTVs";
import PromoRefrigerator from "@/components/PromoRefrigerator";
import PromoSmartphones from "@/components/PromoSmartphones";
import ShopInformation from "@/components/ShopInformation";
import OurStores from "@/components/OurStores";
import ContactUs from "@/components/ContactUs";


export default function HomePage() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Content */}
            <div className="flex-1">
              <HeroCarousel />
              
              {/* Banners Grid - 3 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-white rounded shadow-sm overflow-hidden h-40">
                  <img 
                    src="promo.png" 
                    alt="Promotions Informatique" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded shadow-sm overflow-hidden h-40">
                  <img 
                    src="smartphone.png" 
                    alt="Smartphones" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded shadow-sm overflow-hidden h-40">
                  <img 
                    src="electro.png" 
                    alt="Electroménager" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Featured Products Section */}
              <div className="bg-white p-4 rounded shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">PRODUITS PHARES</h2>
                <FeaturedProducts />
              </div>
              
              {/* Refrigerator Banner */}
              <div className="mb-6">
                <PromoRefrigerator />
              </div>
              
              {/* Gaming Laptops Section */}
              <div className="bg-white p-4 rounded shadow-sm mb-6">
                <PromoGaming />
              </div>
              
              {/* TVs Section */}
              <div className="bg-white p-4 rounded shadow-sm mb-6">
                <PromoTVs />
              </div>
              
              {/* Smartphones Section */}
              <div className="bg-white p-4 rounded shadow-sm mb-6">
                <PromoSmartphones />
              </div>
              
              {/* Products Grid */}
              <div className="bg-white p-4 rounded shadow-sm mb-6">
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                  <h2 className="text-xl font-bold">NOUVEAUTÉS</h2>
                  <div className="flex space-x-2">
                    <button className="text-sm text-gray-600 hover:text-[#E41F18]">Informatique</button>
                    <button className="text-sm text-gray-600 hover:text-[#E41F18]">Smartphones</button>
                    <button className="text-sm text-gray-600 hover:text-[#E41F18]">Électroménager</button>
                  </div>
                </div>
                <ProductGrid />
              </div>
              
              {/* Our Stores and Contact Us Sections */}
              <OurStores />
              <ContactUs />
              <ShopInformation />
              
              {/* Newsletter */}
              <div className="bg-[#1A2B42] text-white p-6 rounded shadow-sm mb-6">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
