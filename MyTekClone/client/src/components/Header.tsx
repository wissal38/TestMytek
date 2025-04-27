import { useState } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Header - Dark Blue Background */}
      <div className="bg-[#1A2B42] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center">
              <img 
                src="my.jfif" 
                alt="Mytek Logo" 
                className="h-10" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full py-1.5 px-3 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-[#E41F18] text-white rounded-r-md">
                <i className="fas fa-search"></i>
              </button>
            </div>
            
            <Link href="#" className="flex items-center">
              <i className="fas fa-shopping-cart text-xl"></i>
            </Link>
            
            <Link href="/nos-magasins" className="flex items-center">
              <i className="fas fa-map-marker-alt text-xl"></i>
            </Link>
            
            <Link href="#" className="flex items-center">
              <i className="fas fa-phone-alt text-xl"></i>
              <span className="ml-1">36 360 000</span>
            </Link>
            
            <div className="relative">
              <button 
                className="flex items-center" 
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              >
                <i className="fas fa-user text-lg ml-1"></i>
                <span className="ml-1">Mon compte</span>
              </button>
              
              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-800 z-20">
                  <ul className="py-1">
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Mon compte
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Ma liste de souhaits
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Déconnexion
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="relative group">
              <button className="flex items-center bg-gray-100 text-[#1A2B42] font-bold py-3 px-4 hover:bg-gray-200">
                <i className="fas fa-bars mr-2"></i>
                TOUS NOS RAYONS
              </button>
              
              <div className="absolute left-0 top-full w-72 bg-white shadow-lg z-50 hidden group-hover:block border border-gray-200">
                <ul className="py-1">
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      INFORMATIQUE
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      GAMING
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      TÉLÉPHONIE & MONTRE CONNECTÉE
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      TV | PHOTO & SON
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      ÉLECTROMÉNAGER
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      MAISON | BRICO & ANIMALERIE
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      IMPRESSION
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      RÉSEAUX & SÉCURITÉ
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      BUREAUTIQUE
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      MODE BEAUTÉ & SANTÉ
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      MOTO | SPORTS & LOISIRS
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      JEUX & JOUETS
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="#" className="block px-4 py-3 flex items-center justify-between text-gray-700">
                      BÉBÉ
                      <i className="fas fa-angle-right text-gray-500"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <nav className="hidden md:flex flex-grow">
              <Link href="#" className="bg-[#0070B6] text-white py-3 px-4 font-medium hover:bg-[#E41F18] transition-colors">
                Climatiseur
              </Link>
              <Link href="#" className="bg-[#4CAF50] text-white py-3 px-4 font-medium hover:bg-[#E41F18] transition-colors">
                Service Entreprise
              </Link>
              <Link href="#" className="bg-[#E41F18] text-white py-3 px-4 font-medium">
                Vente En Ligne
              </Link>
              <Link href="#" className="py-3 px-4 font-medium hover:text-[#E41F18] transition-colors">
                Gaming
              </Link>
              <Link href="#" className="py-3 px-4 font-medium hover:text-[#E41F18] transition-colors">
                Mytek Recrute
              </Link>
              <Link href="#" className="py-3 px-4 font-medium hover:text-[#E41F18] transition-colors">
                Nous Contacter
              </Link>
              <Link href="#" className="bg-[#E41F18] text-white py-3 px-4 font-medium">
                Aide ?
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-auto p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="py-2">
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Climatiseur</Link></li>
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Service Entreprise</Link></li>
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Vente En Ligne</Link></li>
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Gaming</Link></li>
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Mytek Recrute</Link></li>
              <li><Link href="#" className="block py-2 border-b border-gray-100 hover:text-[#E41F18] transition-colors">Nous Contacter</Link></li>
              <li><Link href="#" className="block py-2 hover:text-[#E41F18] transition-colors">Aide ?</Link></li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Financing Banner */}
      <div className="bg-[#00875A] text-white py-3">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="text-center text-2xl font-bold uppercase">
            Facilité de paiement de <span className="text-yellow-300 text-4xl mx-1">3</span> à <span className="text-yellow-300 text-4xl mx-1">60</span> mois <i className="fas fa-exclamation-circle ml-2"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
