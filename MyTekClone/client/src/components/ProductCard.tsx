import { Link } from 'wouter';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="relative h-40">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-[#e41f18] text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-[#4caf50] text-white text-xs font-bold px-2 py-1 rounded">
            Nouveau
          </div>
        )}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-[#e41f18] bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-sm text-gray-500">{product.category}</h3>
        <h4 className="font-semibold mb-2 line-clamp-2 h-12">{product.name}</h4>
        <div className="flex items-center mb-2">
          <div className="flex text-[#f39c12]">
            {Array.from({ length: 5 }).map((_, index) => (
              <i 
                key={index} 
                className={`
                  ${index < Math.floor(product.rating) ? 'fas fa-star' : ''}
                  ${index === Math.floor(product.rating) && product.rating % 1 !== 0 ? 'fas fa-star-half-alt' : ''}
                  ${index > Math.floor(product.rating) && !(index === Math.floor(product.rating) && product.rating % 1 !== 0) ? 'far fa-star' : ''}
                `}
              ></i>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            {product.oldPrice && (
              <span className="text-xs text-gray-500 line-through">{product.oldPrice} DT</span>
            )}
            <p className="text-lg font-bold text-[#e41f18]">{product.price} DT</p>
          </div>
          <button className="bg-[#0070dc] text-white rounded-full w-10 h-10 flex items-center justify-center">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

