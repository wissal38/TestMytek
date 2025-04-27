import { useState } from 'react';
import { Link } from 'wouter';
import PromoProductCard from './PromoProductCard';

// Données pour les téléviseurs
const televisions = [
  {
    id: 301,
    name: "TÉLÉVISEUR 32\" HD M20 + Récepteur Intégré",
    brand: "maxwell",
    price: 439,
    oldPrice: undefined,
    image: "tv1.jfif",
    isRezervi: true,
    features: ["32 pouces", "HD Ready", "Récepteur TNT"]
  },
  {
    id: 302,
    name: "TÉLÉVISEUR 40\" FULL HD",
    brand: "VEGA",
    price: 599,
    oldPrice: 649,
    image: "tv2.jfif",
    isRezervi: true,
    features: ["40 pouces", "Full HD 1080p", "Smart TV"]
  },
  {
    id: 303,
    name: "TÉLÉVISEUR 50\" SMART GOOGLE TV G4E 4K QLED + Récepteur Intégré",
    brand: "TELEFUNKEN",
    price: 1379,
    oldPrice: undefined,
    image: "tv3.jfif",
    isRezervi: true,
    features: ["50 pouces", "4K QLED", "Google TV"]
  },
  {
    id: 304,
    name: "TÉLÉVISEUR 58\" Smart Ultra HD",
    brand: "Condor",
    price: 1549,
    oldPrice: 1629,
    image: "tv4.jfif",
    isRezervi: false,
    features: ["58 pouces", "4K UHD", "HDR"]
  }
];

export default function PromoTVs() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(televisions.length / itemsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < pageCount - 1 ? prev + 1 : prev));
  };
  
  const displayedTVs = televisions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="mb-8">
      {/* Promotional Banner */}
      <div className="w-full mb-6 overflow-hidden rounded">
        <img 
          src="tv5.jfif" 
          alt="Promotion TV" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Section Header */}
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Sélection Téléviseurs</h2>
        <div className="flex items-center">
          <Link href="/produits/televiseurs" className="text-sm text-[#E41F18] font-medium mr-4 hover:underline">
            VOIR PLUS
          </Link>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`bg-white border border-gray-300 w-8 h-8 flex items-center justify-center ${currentPage === 0 ? 'text-gray-400' : 'hover:text-[#E41F18] hover:border-[#E41F18]'}`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
              className={`bg-white border border-gray-300 w-8 h-8 flex items-center justify-center ${currentPage === pageCount - 1 ? 'text-gray-400' : 'hover:text-[#E41F18] hover:border-[#E41F18]'}`}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedTVs.map(tv => (
          <PromoProductCard
            key={tv.id}
            id={tv.id}
            name={tv.name}
            brand={tv.brand}
            price={tv.price}
            oldPrice={tv.oldPrice}
            image={tv.image}
            isRezervi={tv.isRezervi}
            features={tv.features}
          />
        ))}
      </div>
    </div>
  );
}