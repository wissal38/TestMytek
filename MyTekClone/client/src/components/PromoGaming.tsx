import { useState } from 'react';
import { Link } from 'wouter';
import PromoProductCard from './PromoProductCard';

// Données pour les PC portables gamers
const gamingLaptops = [
  {
    id: 201,
    name: "PC Portable Gamer LOQ 15IAX9E",
    brand: "Lenovo",
    price: 2149,
    oldPrice: 2249,
    image: "ga.jfif",
    isRezervi: true,
    description: "i5 13ème Gen- 16Go DDR5 -512Go SSD -GeForce RTX 3050",
    freeGift: "Souris Gaming",
    freeGiftImage: "https://via.placeholder.com/100x100/333333/FFFFFF?text=Mouse",
  },
  {
    id: 202,
    name: "PC Portable GAMER THIN 15 B13UCX",
    brand: "MSI",
    price: 2299,
    oldPrice: 2399,
    image: "ga2.jfif",
    isRezervi: true,
    description: "i5 13e Gen - 8Go DDM - 512Go SSD -GeForce RTX 3050",
    freeGift: "Sac à Dos",
    freeGiftImage: "https://via.placeholder.com/100x100/333333/FFFFFF?text=Bag",
  },
  {
    id: 203,
    name: "PC Portable GAMER THIN 15 B13UCX",
    brand: "MSI",
    price: 2539,
    oldPrice: 2639,
    image: "msi.jfif",
    isRezervi: true,
    description: "i7 13e Gen - 8Go DDM - 512Go SSD -GeForce RTX 3050",
    freeGift: "Sac à Dos",
    freeGiftImage: "https://via.placeholder.com/100x100/333333/FFFFFF?text=Bag",
  },
  {
    id: 204,
    name: "PC Portable GAMER THIN 15 B1",
    brand: "MSI",
    price: 2589,
    oldPrice: 2929,
    image: "gg.jfif",
    isRezervi: true,
    description: "i5 13e Gen - 16Go DDM - 512Go SSD -GeForce RTX 3050",
  }
];

export default function PromoGaming() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(gamingLaptops.length / itemsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < pageCount - 1 ? prev + 1 : prev));
  };
  
  const displayedLaptops = gamingLaptops.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Sélection PC Portable Gamer</h2>
        <div className="flex items-center">
          <Link href="/produits/pc-gamer" className="text-sm text-[#E41F18] font-medium mr-4 hover:underline">
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
        {displayedLaptops.map(laptop => (
          <PromoProductCard
            key={laptop.id}
            id={laptop.id}
            name={laptop.name}
            brand={laptop.brand}
            price={laptop.price}
            oldPrice={laptop.oldPrice}
            image={laptop.image}
            isRezervi={laptop.isRezervi}
            description={laptop.description}
            freeGift={laptop.freeGift}
            freeGiftImage={laptop.freeGiftImage}
          />
        ))}
      </div>
    </div>
  );
}