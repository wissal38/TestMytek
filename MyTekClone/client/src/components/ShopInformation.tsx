import React from 'react';

export default function ShopInformation() {
  return (
    <div className="mb-10 bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Entreprise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-md p-4 flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#E41F18]">
                <img 
                  src="mgtu.jfif" 
                  alt="Service Entreprise" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-[#0070B6] font-bold mb-2">Service Entreprise</h3>
              <div className="text-sm">
                <p className="mb-1"><span className="font-bold">Tel:</span> <a href="tel:+21636010015" className="hover:text-[#E41F18]">36 010 015</a></p>
                <p className="mb-1">
                  <span className="font-bold">Mail:</span> <a href="mailto:devis@mytek.tn" className="hover:text-[#E41F18]">devis@mytek.tn</a>
                </p>
                <p className="font-bold mb-1">Horaires:</p>
                <p className="text-xs">Lun au Ven: 08:00 - 17:30</p>
                <p className="text-xs">Sam : 08:00 - 13:00</p>
                <p className="text-xs">Dim: Fermé</p>
              </div>
            </div>
          </div>
          
          {/* Placeholder for additional info blocks */}
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>
        
        {/* Company Description */}
        <div className="mb-10 bg-white shadow-md rounded-md p-6 text-center">
          <p className="mb-4">
            <span className="font-bold">Fondée en 2004, Mytek</span> est la référence incontournable en Tunisie pour l'achat de
            <span className="text-[#0070B6] font-semibold"> PC Portables</span>,
            <span className="text-[#0070B6] font-semibold"> Gamers</span>,
            <span className="text-[#0070B6] font-semibold"> Smartphones</span>,
            <span className="text-[#0070B6] font-semibold"> Électroménager</span>,
            <span className="text-[#0070B6] font-semibold"> Imprimantes</span> et
            <span className="text-[#0070B6] font-semibold"> Accessoires de Haute Technologie</span>
          </p>
          <p className="mb-4">
            Forte de son expérience et de son équipe passionnée par les nouvelles technologies, Mytek s'engage à répondre aux attentes de ses clients en proposant une sélection de produits de grande qualité à des prix compétitifs.
          </p>
          <p className="font-bold text-[#E41F18]">
            Commandez en toute confiance avec notre service de livraison rapide et fiable.
          </p>
          <p className="italic">
            Ne manquez pas nos promotions exceptionnelles et bénéficiez d'offres exclusives !
          </p>
        </div>
      </div>
    </div>
  );
}