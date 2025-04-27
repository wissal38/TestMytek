import { useRef } from 'react';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/lib/data';

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-3">
        <div className="flex space-x-2">
          <button 
            className="bg-white border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-[#E41F18] hover:border-[#E41F18]"
            onClick={scrollPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="bg-white border border-gray-300 w-8 h-8 flex items-center justify-center hover:text-[#E41F18] hover:border-[#E41F18]"
            onClick={scrollNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-4 pb-2">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="min-w-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
