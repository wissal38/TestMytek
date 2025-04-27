import { Link } from 'wouter';

// SVG for category images
const CategorySvg1 = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full">
    <rect width="300" height="150" fill="#1E40AF" />
    <text x="50%" y="50%" fontSize="24" fill="white" textAnchor="middle">Ordinateurs</text>
  </svg>
);

const CategorySvg2 = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full">
    <rect width="300" height="150" fill="#9D174D" />
    <text x="50%" y="50%" fontSize="24" fill="white" textAnchor="middle">Smartphones</text>
  </svg>
);

const CategorySvg3 = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full">
    <rect width="300" height="150" fill="#065F46" />
    <text x="50%" y="50%" fontSize="24" fill="white" textAnchor="middle">Accessoires</text>
  </svg>
);

const CategorySvg4 = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full">
    <rect width="300" height="150" fill="#7E22CE" />
    <text x="50%" y="50%" fontSize="24" fill="white" textAnchor="middle">Gaming</text>
  </svg>
);

export default function CategoryBanners() {
  return (
    <section className="my-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="#" className="relative overflow-hidden rounded-lg h-32 group">
            <CategorySvg1 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Ordinateurs</h3>
              <p className="text-sm">Portables & Bureaux</p>
            </div>
          </Link>
          <Link href="#" className="relative overflow-hidden rounded-lg h-32 group">
            <CategorySvg2 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Smartphones</h3>
              <p className="text-sm">Les derniers modèles</p>
            </div>
          </Link>
          <Link href="#" className="relative overflow-hidden rounded-lg h-32 group">
            <CategorySvg3 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Accessoires</h3>
              <p className="text-sm">Pour tous vos appareils</p>
            </div>
          </Link>
          <Link href="#" className="relative overflow-hidden rounded-lg h-32 group">
            <CategorySvg4 />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Gaming</h3>
              <p className="text-sm">Consoles & Accessoires</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
