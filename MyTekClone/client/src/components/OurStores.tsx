import React from 'react';

// Store information data 
const stores = [
  {
    id: 1,
    name: 'Megastore Tunis',
    phone: '36 360 000',
    email: ['info@mytek.tn', 'devis@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgtu.jfif'
  },
  {
    id: 2,
    name: 'Megastore Sousse',
    phone: '36 010 387',
    email: ['megastore@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgso.jfif'
  },
  {
    id: 3,
    name: 'Magasin Nabeul',
    phone: '36 010 380',
    email: ['Nabeul2@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgne.jfif'
  },
  {
    id: 4,
    name: 'Megastore Sfax Lafrane',
    phone: '36 010 388',
    email: ['sfax@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgso.jfif'
  },
  {
    id: 5,
    name: 'Magasin Bizerte',
    phone: '36 010 366',
    email: ['bizerte@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgtu.jfif'
  },
  {
    id: 6,
    name: 'Magasin Liberté Tunis',
    phone: '36 010 370',
    email: ['liberty@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      weekend: '09:00 - 17:00',
      sunday: 'Fermé'
    },
    image: 'mgtu.jfif'
  },
  {
    id: 7,
    name: 'Magasin Sousse Trocadero',
    phone: '36 010 377',
    email: ['sousse@mytek.tn'],
    hours: {
      weekdays: '09:00 - 19:00',
      weekend: '09:00 - 17:00',
      sunday: 'Fermé'
    },
    image: 'mgtu.jfif'
  },
  {
    id: 8,
    name: 'Magasin Hammamet',
    phone: '36 010 381',
    email: ['hammamet@mytek.tn'],
    hours: {
      weekdays: '08:00 - 19:00',
      sunday: '09:00 - 15:00'
    },
    image: 'mgtu.jfif'
  }
];

export default function OurStores() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 relative">
          <span className="relative z-10">Nos Magasins</span>
          <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-1"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stores.map((store) => (
            <div key={store.id} className="bg-white shadow-md rounded-md p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-[#0070B6] font-bold mb-1 text-sm">{store.name}</h3>
                <div className="text-xs">
                  <p className="mb-1">
                    <span className="font-bold">Tel:</span> <a href={`tel:+216${store.phone.replace(/\s/g, '')}`} className="hover:text-[#E41F18]">{store.phone}</a>
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Mail:</span> {store.email.map((email, index) => (
                      <span key={email}>
                        {index > 0 && <br />}
                        <a href={`mailto:${email}`} className="hover:text-[#E41F18]">{email}</a>
                      </span>
                    ))}
                  </p>
                  <p className="font-bold mb-1">Horaires:</p>
                  <p>Lun au Sam: {store.hours.weekdays}</p>
                  {store.hours.weekend && <p>Sam: {store.hours.weekend}</p>}
                  <p>Dim: {store.hours.sunday}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}