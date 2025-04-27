import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

const CATEGORIES = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'laptops', name: 'Ordinateurs portables' },
  { id: 'accessories', name: 'Accessoires' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'tv', name: 'Smart TV' },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.categoryId === activeCategory);

  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nouveaux produits</h2>
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
            {CATEGORIES.map(category => (
              <button 
                key={category.id}
                className={`
                  px-4 py-2 rounded-full whitespace-nowrap
                  ${activeCategory === category.id
                    ? 'bg-[#e41f18] text-white'
                    : 'bg-white text-[#333333] border border-gray-300'}
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="bg-white border border-gray-300 text-[#333333] px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Voir plus de produits
          </button>
        </div>
      </div>
    </section>
  );
}
