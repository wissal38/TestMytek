import { useState } from 'react';
import { Link } from 'wouter';

type SubCategory = {
  name: string;
  link: string;
};

type Category = {
  name: string;
  link: string;
  subCategories: SubCategory[];
};

const CATEGORIES: Category[] = [
  {
    name: "INFORMATIQUE",
    link: "/informatique",
    subCategories: [
      { name: "Ordinateurs portables", link: "/ordinateurs-portables" },
      { name: "PC Portable", link: "/pc-portable" },
      { name: "PC Gamer", link: "/pc-gamer" },
      { name: "PC Portable Pro", link: "/pc-portable-pro" },
      { name: "Mac", link: "/mac" },
      { name: "UltraBook", link: "/ultrabook" },
    ]
  },
  {
    name: "GAMING",
    link: "/gaming",
    subCategories: [
      { name: "Gaming PC", link: "/gaming-pc" },
      { name: "PC Portable Gamer", link: "/pc-portable-gamer" },
      { name: "Ordinateur Gamer", link: "/ordinateur-gamer" },
    ]
  },
  {
    name: "TÉLÉPHONIE & MONTRE CONNECTÉE",
    link: "/telephonie-montre-connectee",
    subCategories: [
      { name: "Smartphone & Mobile", link: "/smartphone-mobile" },
      { name: "Téléphone Portable", link: "/telephone-portable" },
      { name: "Smartphone", link: "/smartphone" },
      { name: "iPhone", link: "/iphone" },
    ]
  },
  {
    name: "TV | PHOTO & SON",
    link: "/tv-photo-son",
    subCategories: [
      { name: "Téléviseurs", link: "/televiseurs" },
      { name: "Home Cinéma", link: "/home-cinema" },
      { name: "Enceintes", link: "/enceintes" },
    ]
  },
  {
    name: "ÉLECTROMÉNAGER",
    link: "/electromenager",
    subCategories: [
      { name: "Réfrigérateurs", link: "/refrigerateurs" },
      { name: "Lave-linge", link: "/lave-linge" },
      { name: "Lave-vaisselle", link: "/lave-vaisselle" },
    ]
  },
  {
    name: "MAISON | BRICO & ANIMALERIE",
    link: "/maison-brico-animalerie",
    subCategories: [
      { name: "Meubles", link: "/meubles" },
      { name: "Décoration", link: "/decoration" },
      { name: "Outillage", link: "/outillage" },
    ]
  },
  {
    name: "IMPRESSION",
    link: "/impression",
    subCategories: [
      { name: "Imprimantes", link: "/imprimantes" },
      { name: "Cartouches", link: "/cartouches" },
      { name: "Scanners", link: "/scanners" },
    ]
  },
  {
    name: "RÉSEAUX & SÉCURITÉ",
    link: "/reseaux-securite",
    subCategories: [
      { name: "Routeurs", link: "/routeurs" },
      { name: "Caméras de surveillance", link: "/cameras-surveillance" },
      { name: "Alarmes", link: "/alarmes" },
    ]
  },
  {
    name: "BUREAUTIQUE",
    link: "/bureautique",
    subCategories: [
      { name: "Papeterie", link: "/papeterie" },
      { name: "Calculatrices", link: "/calculatrices" },
      { name: "Fournitures", link: "/fournitures" },
    ]
  },
  {
    name: "MODE BEAUTÉ & SANTÉ",
    link: "/mode-beaute-sante",
    subCategories: [
      { name: "Parfums", link: "/parfums" },
      { name: "Soins", link: "/soins" },
      { name: "Rasoirs", link: "/rasoirs" },
    ]
  },
  {
    name: "MOTO | SPORTS & LOISIRS",
    link: "/moto-sports-loisirs",
    subCategories: [
      { name: "Équipements moto", link: "/equipements-moto" },
      { name: "Équipements sport", link: "/equipements-sport" },
      { name: "Jeux de plein air", link: "/jeux-plein-air" },
    ]
  },
  {
    name: "JEUX & JOUETS",
    link: "/jeux-jouets",
    subCategories: [
      { name: "Jeux de société", link: "/jeux-societe" },
      { name: "Jouets enfants", link: "/jouets-enfants" },
      { name: "Lego", link: "/lego" },
    ]
  },
  {
    name: "BÉBÉ",
    link: "/bebe",
    subCategories: [
      { name: "Poussettes", link: "/poussettes" },
      { name: "Sièges auto", link: "/sieges-auto" },
      { name: "Biberons", link: "/biberons" },
    ]
  },
];

interface CategorySidebarProps {
  className?: string;
}

export default function CategorySidebar({ className = '' }: CategorySidebarProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  
  const handleCategoryHover = (index: number) => {
    setActiveCategory(index);
  };
  
  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className="bg-white border border-gray-200 w-64">
        <ul>
          {CATEGORIES.map((category, index) => (
            <li 
              key={index} 
              className="border-b border-gray-200 hover:bg-gray-100"
              onMouseEnter={() => handleCategoryHover(index)}
            >
              <Link 
                href={category.link} 
                className="block px-4 py-2 flex items-center justify-between text-gray-700 hover:text-[#E41F18] transition-colors"
              >
                <span>{category.name}</span>
                <i className="fas fa-angle-right text-gray-500"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {activeCategory !== null && (
        <div 
          className="absolute left-64 top-0 bg-white shadow-lg border border-gray-200 min-h-full w-[700px] z-10"
          onMouseLeave={handleCategoryLeave}
        >
          <div className="p-4 grid grid-cols-4 gap-4">
            {CATEGORIES[activeCategory].subCategories.map((subCategory, index) => (
              <div key={index} className="text-gray-700">
                <Link 
                  href={subCategory.link}
                  className="hover:text-blue-600 hover:underline font-medium"
                >
                  {subCategory.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}