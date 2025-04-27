import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer>
      {/* Social Media Bar */}
      <div className="bg-gray-300 py-3">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex space-x-6">
            <a href="#" className="rounded-full bg-[#4267B2] w-12 h-12 flex items-center justify-center text-white">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-12 h-12 flex items-center justify-center text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="rounded-full bg-[#FF0000] w-12 h-12 flex items-center justify-center text-white">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="#" className="rounded-full bg-black w-12 h-12 flex items-center justify-center text-white">
              <i className="fab fa-x-twitter text-xl"></i>
            </a>
            <a href="#" className="rounded-full bg-[#0077B5] w-12 h-12 flex items-center justify-center text-white">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Information Column */}
            <div>
              <h3 className="font-bold text-lg uppercase mb-4">INFORMATION</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/a-propos" className="hover:text-[#E41F18]">À propos</Link>
                </li>
                <li>
                  <Link href="/conditions" className="hover:text-[#E41F18]">Conditions Générales de Vente</Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="hover:text-[#E41F18]">Politique de Confidentialité</Link>
                </li>
                <li>
                  <Link href="/livraison" className="hover:text-[#E41F18]">Expédition & retour</Link>
                </li>
                <li>
                  <Link href="/securite" className="hover:text-[#E41F18]">Achats sécurisés</Link>
                </li>
                <li>
                  <Link href="/commandes" className="hover:text-[#E41F18]">Statut de la commande</Link>
                </li>
                <li>
                  <Link href="/paiement" className="hover:text-[#E41F18]">Mode de paiement</Link>
                </li>
                <li>
                  <Link href="/recrutement" className="hover:text-[#E41F18]">Recrutement</Link>
                </li>
              </ul>
            </div>
            
            {/* Services Column */}
            <div>
              <h3 className="font-bold text-lg uppercase mb-4">NOS SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/magasins" className="hover:text-[#E41F18]">Nos magasins</Link>
                </li>
                <li>
                  <Link href="/entreprise" className="hover:text-[#E41F18]">Service Entreprise</Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-[#E41F18]">Service Clients</Link>
                </li>
                <li>
                  <Link href="/drive" className="hover:text-[#E41F18]">Service Drive</Link>
                </li>
                <li>
                  <Link href="/livraison" className="hover:text-[#E41F18]">Service Livraison</Link>
                </li>
                <li>
                  <Link href="/apres-vente" className="hover:text-[#E41F18]">Service après-vente</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#E41F18]">Nous contacter</Link>
                </li>
                <li>
                  <Link href="/commandes" className="hover:text-[#E41F18]">Suivez vos commandes</Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h3 className="font-bold text-lg uppercase mb-4">INFORMATIONS DE CONTACT</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex">
                  <div className="mr-3 text-[#E41F18]">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span>58, Rue de l'Industrie Charguia I 2035 tunis</span>
                </li>
                <li className="flex">
                  <div className="mr-3 text-[#E41F18]">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <span>(+216) 36 360 000</span>
                </li>
                <li className="flex">
                  <div className="mr-3 text-[#E41F18]">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div>info@mytek.tn</div>
                    <div>devis@mytek.tn</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-[#E41F18]">
                    <i className="far fa-clock"></i>
                  </div>
                  <div>
                    <div>7 jours sur 7,</div>
                    <div>Du Lundi Au Samedi: 08h00 à 19h00</div>
                    <div>Dimanche: 09h00 à 19h00</div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Column */}
            <div>
              <h3 className="font-bold text-lg uppercase mb-4">S'INSCRIRE AUX NEWSLETTERS</h3>
              <p className="text-sm mb-3">Inscrivez-vous à la newsletter Mytek</p>
              <div className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Saisissez votre email" 
                  className="px-3 py-2 border border-gray-300 flex-grow text-sm"
                />
                <button className="bg-[#E41F18] text-white px-4 py-2 uppercase text-sm">
                  Souscrire
                </button>
              </div>
              <div className="mb-4">
                <p className="text-xs mb-2">CARTE D'E</p>
                <div className="flex space-x-2">
                  <img src="visa.png" alt="Visa" className="h-6 w-auto" />
                  <img src="cart.png" alt="Mastercard" className="h-6 w-auto" />
                  <img src="cib.png" alt="CIB" className="h-6 w-auto" />
                  <img src="ed.jfif" alt="E-Dinar" className="h-6 w-auto" />
                  <img src="ver.png" alt="Verified" className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Banner */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E41F18] flex items-center justify-center text-white mb-2">
                <i className="far fa-smile-beam text-2xl"></i>
              </div>
              <div className="text-center">
                <p className="font-bold uppercase text-xs">SATISFAIT OU REMBOURSÉ</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E41F18] flex items-center justify-center text-white mb-2">
                <i className="fas fa-hand-holding-usd text-2xl"></i>
              </div>
              <div className="text-center">
                <p className="font-bold uppercase text-xs">PAIEMENT À LA LIVRAISON</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E41F18] flex items-center justify-center text-white mb-2">
                <i className="fas fa-truck text-2xl"></i>
              </div>
              <div className="text-center">
                <p className="font-bold uppercase text-xs">GRATUIT EN 48H À PARTIR DE 300DT</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E41F18] flex items-center justify-center text-white mb-2">
                <i className="fas fa-credit-card text-2xl"></i>
              </div>
              <div className="text-center">
                <p className="font-bold uppercase text-xs">PAIEMENT EN LIGNE 100% SÉCURISÉ</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E41F18] flex items-center justify-center text-white mb-2">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <div className="text-center">
                <p className="font-bold uppercase text-xs">CONTACTEZ-NOUS AU 36 360 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-100 py-4 border-t border-gray-300">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Mytek Tunisie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}