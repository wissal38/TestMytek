import { Link } from 'wouter';

// SVG for promotion images
const PromotionSvg1 = () => (
  <svg viewBox="0 0 600 200" className="w-full h-full">
    <rect width="600" height="200" fill="#2563EB" />
    <text x="50%" y="50%" fontSize="28" fill="white" textAnchor="middle">Accessoires PC</text>
  </svg>
);

const PromotionSvg2 = () => (
  <svg viewBox="0 0 600 200" className="w-full h-full">
    <rect width="600" height="200" fill="#7C3AED" />
    <text x="50%" y="50%" fontSize="28" fill="white" textAnchor="middle">Smart TV 4K</text>
  </svg>
);

export default function Promotions() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <PromotionSvg1 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">Accessoires PC</h3>
              <p className="mb-4">Jusqu'à -30% de réduction</p>
              <Link href="#" className="bg-[#e41f18] text-white px-4 py-2 rounded-full font-semibold inline-block">Voir les offres</Link>
            </div>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <PromotionSvg2 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">Smart TV 4K</h3>
              <p className="mb-4">À partir de 1299 DT</p>
              <Link href="#" className="bg-[#e41f18] text-white px-4 py-2 rounded-full font-semibold inline-block">Découvrir</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
