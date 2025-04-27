import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // Show success message or handle errors
  };

  return (
    <section className="my-12 bg-[#f5f5f5] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Abonnez-vous à notre newsletter</h2>
          <p className="text-gray-600 mb-6">Recevez nos offres exclusives et nos nouveaux produits directement dans votre boîte de réception.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e41f18]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-[#e41f18] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
