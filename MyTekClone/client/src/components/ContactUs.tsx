import React from 'react';

export default function ContactUs() {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 relative">
          <span className="relative z-10 px-4 bg-white">CONTACTEZ NOUS</span>
          <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-1"></span>
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <a 
              href="tel:+21636360000" 
              className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white transition-transform hover:scale-110"
            >
              <i className="fas fa-phone-alt text-xl"></i>
            </a>
            <a 
              href="https://m.me/mytek.tn" 
              className="w-14 h-14 rounded-full bg-[#0084FF] flex items-center justify-center text-white transition-transform hover:scale-110"
            >
              <i className="fab fa-facebook-messenger text-xl"></i>
            </a>
            <a 
              href="https://wa.me/+21636360000" 
              className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-transform hover:scale-110"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a 
              href="mailto:info@mytek.tn" 
              className="w-14 h-14 rounded-full bg-[#4285F4] flex items-center justify-center text-white transition-transform hover:scale-110"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-8 relative">
          <span className="relative z-10 px-4 bg-white">Le meilleur de Nos Catégories</span>
          <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-1"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Smartphone & Mobilité */}
          <div className="bg-white border border-gray-200 p-4 rounded-sm">
            <h3 className="text-center font-bold border-b pb-2 mb-3">SMARTPHONE & MOBILITÉ</h3>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="text-center">
                <i className="fas fa-mobile-alt text-4xl text-gray-400 mb-2"></i>
                <ul className="space-y-1 text-left pl-4">
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Smartphone
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Montre connectée
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Bracelet connecté
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Kit piétons & casque
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Power Bank
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Informatique */}
          <div className="bg-white border border-gray-200 p-4 rounded-sm">
            <h3 className="text-center font-bold border-b pb-2 mb-3">INFORMATIQUE</h3>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="text-center">
                <i className="fas fa-laptop text-4xl text-gray-400 mb-2"></i>
                <ul className="space-y-1 text-left pl-4">
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    PC Portable
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    PC Gamer
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Tablette
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Disque dur externe
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Carte Graphique
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Clé USB
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* TV & SON */}
          <div className="bg-white border border-gray-200 p-4 rounded-sm">
            <h3 className="text-center font-bold border-b pb-2 mb-3">TV & SON</h3>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="text-center">
                <i className="fas fa-tv text-4xl text-gray-400 mb-2"></i>
                <ul className="space-y-1 text-left pl-4">
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    TV LED
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Haut parleur
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Dongle TV
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Abonnement
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Barre de Son
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Vidéo Projecteur
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Electroménager */}
          <div className="bg-white border border-gray-200 p-4 rounded-sm">
            <h3 className="text-center font-bold border-b pb-2 mb-3">ÉLECTROMÉNAGER</h3>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="text-center">
                <i className="fas fa-home text-4xl text-gray-400 mb-2"></i>
                <ul className="space-y-1 text-left pl-4">
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Climatiseur
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Réfrigérateur
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Congélateur
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Clavier
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Table de cuisson
                  </li>
                  <li className="text-[#E41F18] text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#E41F18] rounded-full mr-1 flex-shrink-0"></span> 
                    Four
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}