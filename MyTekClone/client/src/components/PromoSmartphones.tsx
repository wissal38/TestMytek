import { useState } from 'react';
import { Link } from 'wouter';
import PromoProductCard from './PromoProductCard';

// Données pour les smartphones
const smartphones = [
  {
    id: 401,
    name: "SMARTPHONE EVERTEK K20S PRO",
    brand: "EVERTEK",
    price: 149,
    oldPrice: 199,
    image: "ever.jpg",
    description: "5.5\" - 2Go - 16Go",
    isRezervi: false
  },
  {
    id: 402,
    name: "SMARTPHONE INFINIX NOTE 12 SMART 8",
    brand: "INFINIX",
    price: 349,
    oldPrice: undefined,
    image: "infi.jfif",
    description: "6.7\" - 128Go - 3Go",
    isRezervi: true
  },
  {
    id: 403,
    name: "SMARTPHONE TECNO SPARK 20C",
    brand: "TECNO",
    price: 419,
    oldPrice: 499,
    image: "spa.jfif",
    description: "6.6\" - 256Go - 8Go",
    isRezervi: true
  },
  {
    id: 404,
    name: "SMARTPHONE REALME C55",
    brand: "REALME",
    price: 599,
    oldPrice: 659,
    image: "rea.jfif",
    description: "6.7\" - 64Go - 256Go",
    isRezervi: true
  },
  {
    id: 405,
    name: "SMARTPHONE SAMSUNG GALAXY A14",
    brand: "SAMSUNG",
    price: 599,
    oldPrice: undefined,
    image: "a14.jfif",
    description: "6.6\" - 64Go - 128Go",
    isRezervi: true
  },
  {
    id: 406,
    name: "SMARTPHONE OPPO A3 PRO",
    brand: "OPPO",
    price: 959,
    oldPrice: undefined,
    image: "op.jfif",
    description: "6.7\" - 8Go - 256Go",
    isRezervi: true
  }
];

// Section pour les autres accessoires
const accessories = [
  {
    id: 501,
    name: "STABILISATEUR SELFIE STICK 360°",
    brand: undefined,
    price: 149,
    oldPrice: 199,
    image: "360.jfif",
    isRezervi: false
  },
  {
    id: 502,
    name: "ÉCOUTEURS SANS FIL BOROFONE",
    brand: "BOROFONE",
    price: 59,
    oldPrice: undefined,
    image: "eco.jfif",
    isRezervi: false
  },
  {
    id: 503,
    name: "Haut Parleur Bluetooth Mini 3 Pro",
    brand: "ANKER",
    price: 109,
    oldPrice: 189,
    image: "haut.jfif",
    isRezervi: false
  }
];

export default function PromoSmartphones() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(smartphones.length / itemsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < pageCount - 1 ? prev + 1 : prev));
  };
  
  const displayedPhones = smartphones.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Sélection smartphones</h2>
        <div className="flex items-center">
          <Link href="/produits/smartphones" className="text-sm text-[#E41F18] font-medium mr-4 hover:underline">
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayedPhones.map(phone => (
          <PromoProductCard
            key={phone.id}
            id={phone.id}
            name={phone.name}
            brand={phone.brand}
            price={phone.price}
            oldPrice={phone.oldPrice}
            image={phone.image}
            isRezervi={phone.isRezervi}
            description={phone.description}
            className="min-h-[360px]"
          />
        ))}
      </div>
      
      {/* Samsung S25 Promotion */}
      <div className="bg-[#E1F5FE] mt-8 mb-8 p-4 flex flex-col md:flex-row items-center justify-between rounded">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="25.jfif" 
            alt="Samsung Galaxy S25" 
            className="w-24 h-24 object-contain mr-4"
          />
          <div>
            <div className="font-bold text-lg">SAMSUNG</div>
            <div className="text-lg font-bold">Galaxy S25</div>
            <div className="flex items-center mt-1">
              <div className="bg-[#ffdc0a] px-2 text-[10px] font-bold mr-1">RÉZERVI</div>
              <div className="text-[10px] bg-[#E41F18] text-white px-1">
                6 MOIS SANS INTÉRÊT
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="text-3xl font-bold text-[#E41F18] mb-2">3899 DT</div>
          <Link 
            href="/produit/samsung-galaxy-s25" 
            className="bg-[#E41F18] text-white py-1 px-4 rounded font-semibold hover:bg-[#c91912]"
          >
            ACHETER
          </Link>
        </div>
      </div>
      
      {/* Accessoires Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {accessories.map(accessory => (
          <div key={accessory.id} className="bg-[#EEFAF5] p-4 rounded flex items-center">
            <img 
              src={accessory.image} 
              alt={accessory.name} 
              className="w-20 h-20 object-contain mr-4"
            />
            <div className="flex-grow">
              {accessory.brand && (
                <div className="text-sm font-bold">{accessory.brand}</div>
              )}
              <div className="text-sm font-semibold">{accessory.name}</div>
              <div className="mt-2 flex items-baseline">
                {accessory.oldPrice && (
                  <span className="text-gray-500 line-through text-xs mr-2">{accessory.oldPrice}DT</span>
                )}
                <span className="text-[#E41F18] font-bold">{accessory.price}DT</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}