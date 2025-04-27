import { Link } from 'wouter';

interface PromoProductProps {
  id: number;
  name: string;
  brand: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image: string;
  isRezervi?: boolean;
  monthsNoInterest?: number;
  freeGift?: string;
  freeGiftImage?: string;
  discount?: number;
  features?: string[];
  className?: string;
}

export default function PromoProductCard({ 
  id, 
  name, 
  brand, 
  description, 
  price, 
  oldPrice, 
  image, 
  isRezervi = false, 
  monthsNoInterest = 6, 
  freeGift, 
  freeGiftImage,
  discount,
  features,
  className = '' 
}: PromoProductProps) {
  return (
    <div className={`bg-white p-3 flex flex-col border border-gray-200 relative ${className}`}>
      {/* Brand */}
      {brand && (
        <div className="mb-2">
          <div className="h-5">
            <span className="font-bold text-sm">{brand}</span>
          </div>
        </div>
      )}
      
      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-700 mb-2 h-10 line-clamp-2">
        {name}
      </h3>
      
      {/* Features - for TVs, Computers, etc. */}
      {features && features.length > 0 && (
        <div className="text-xs text-gray-600 mb-2">
          {features.map((feature, index) => (
            <div key={index} className="mb-1">• {feature}</div>
          ))}
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative flex-grow flex items-center justify-center p-2 min-h-[160px]">
        <img 
          src={image} 
          alt={name} 
          className="max-h-36 object-contain mx-auto"
        />
        
        {/* RÉZERVI Badge */}
        {isRezervi && (
          <div className="absolute top-1 left-0">
            <div className="bg-[#ffdc0a] px-2 py-1 text-xs font-bold">
              RÉZERVI
            </div>
            <div className="text-[9px] bg-[#e41f18] text-white px-1 py-0.5 flex items-center">
              <span>Jusqu'à</span>
              <span className="font-bold text-xs mx-0.5">{monthsNoInterest}</span>
              <span>MOIS SANS INTÉRÊT</span>
            </div>
          </div>
        )}
        
        {/* Discount Badge */}
        {discount && !isRezervi && (
          <div className="absolute top-1 left-0 bg-[#e41f18] text-white px-2 py-1 text-sm font-bold">
            -{discount}%
          </div>
        )}
        
        {/* Free Gift Image */}
        {freeGift && freeGiftImage && (
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <img src={freeGiftImage} alt={freeGift} className="w-full h-full object-contain" />
            <div className="absolute bottom-0 right-0 bg-white text-[#e41f18] text-xs font-bold p-0.5">
              Offert
            </div>
          </div>
        )}
      </div>
      
      {/* Price */}
      <div className="mt-3">
        <div className="flex flex-col">
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm">{oldPrice}DT</span>
          )}
          <span className="text-[#e41f18] font-bold text-2xl">{price}DT</span>
        </div>
        
        {isRezervi && (
          <div className="flex items-center mt-2">
            <div className="bg-[#e41f18] text-white px-1 py-0.5 text-xs font-bold mr-1">3x</div>
            <span className="text-xs text-gray-600">SANS FRAIS</span>
          </div>
        )}
      </div>
      
      {/* Buy Button */}
      <Link href={`/produit/${id}`} className="mt-3 bg-[#e41f18] text-white py-2 px-4 rounded text-center hover:bg-[#d91c16] transition-colors text-sm font-medium">
        ACHETER
      </Link>
    </div>
  );
}