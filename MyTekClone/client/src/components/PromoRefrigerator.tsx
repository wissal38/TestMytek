import { Link } from 'wouter';

export default function PromoRefrigerator() {
  return (
    <div className="mb-8 bg-[#222222] text-white overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <img 
            src="ref.png" 
            alt="Beko" 
            className="h-8 mx-auto md:mx-0 mb-4"
          />
          
          <h2 className="text-4xl font-bold uppercase mb-3">RÉFRIGÉRATEUR</h2>
          <h2 className="text-4xl font-bold uppercase mb-6">INOX</h2>
          
          <div className="relative mb-6">
            <div className="text-yellow-400 text-6xl font-black mb-1">
              3799<span className="text-xl align-top ml-1">DT</span>
            </div>
            <div className="text-xl line-through">3999DT</div>
          </div>
          
          <div className="flex flex-wrap mb-6 justify-center md:justify-start gap-3">
            <div className="bg-white text-black font-bold rounded px-3 py-1">
              700 Litres
            </div>
            <div className="bg-black text-white font-bold border border-white rounded px-3 py-1">
              NOFROST
            </div>
            <div className="bg-green-500 text-white font-bold rounded px-3 py-1">
              A++
            </div>
          </div>
          
          <Link 
            href="/produit/refrigerateur-beko-700l" 
            className="inline-block bg-[#E41F18] hover:bg-[#c91912] text-white font-bold py-2 px-8 rounded transition-colors"
          >
            ACHETER
          </Link>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="relative">
            <img 
              src="refff.jfif" 
              alt="Réfrigérateur Beko" 
              className="max-h-[800px]"
            />
            
            {/* Promo Badge */}
            <div className="absolute top-2 right-2">
              <div className="bg-[#ffdc0a] text-[#E41F18] font-bold px-2 py-1">
                RÉZERVI
              </div>
              <div className="text-[10px] bg-[#E41F18] text-white px-1">
                Jusqu'à <span className="font-bold">6</span> MOIS SANS INTÉRÊT
              </div>
            </div>
            
            {/* Free Gift */}
            <div className="absolute bottom-2 right-2 flex flex-col items-center">
              <img 
                src="rebo.jfif" 
                alt="Robot Pétrin Offert" 
                className="w-24 h-24 object-contain"
              />
              <span className="bg-white text-[#E41F18] font-bold px-2 py-0.5 text-sm">
                Robot Pétrin Offert
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}