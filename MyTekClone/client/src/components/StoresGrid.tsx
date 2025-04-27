import { Link } from 'wouter';

// Les données des magasins
const STORES = [
  {
    id: 1,
    name: 'Megastore Tunis',
    phone: '36 360 000',
    email: 'info@mytek.tn / devis@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MT',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 2,
    name: 'Megastore Sousse',
    phone: '36 010 387',
    email: 'megastore@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MS',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 3,
    name: 'Magasin Nabeul',
    phone: '36 010 380',
    email: 'Nabeul2@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MN',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 4,
    name: 'Megastore Sfax Lafrane',
    phone: '36 010 388',
    email: 'sfax@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MSF',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 5,
    name: 'Magasin Bizerte',
    phone: '36 010 389',
    email: 'bizerte@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MB',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 6,
    name: 'Magasin Liberté Tunis',
    phone: '36 010 370',
    email: 'liberty@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=ML',
    hours: {
      weekdays: 'Lun au Ven: 09:00 - 19:00',
      saturday: 'Sam: 09:00 - 17:00',
      sunday: 'Dim: Fermé'
    }
  },
  {
    id: 7,
    name: 'Magasin Sousse Trocadero',
    phone: '36 010 377',
    email: 'sousse@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MST',
    hours: {
      weekdays: 'Lun au Ven: 09:00 - 19:00',
      saturday: 'Sam: 09:00 - 17:00',
      sunday: 'Dim: Fermé'
    }
  },
  {
    id: 8,
    name: 'Magasin Hammamet',
    phone: '36 010 381',
    email: 'hammamet@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MH',
    hours: {
      weekdays: 'Lun au sam: 08:00 - 19:00',
      sunday: 'dim : 09:00 - 15:00'
    }
  },
  {
    id: 9,
    name: 'Magasin Kairouan',
    phone: '36 010 386',
    email: 'kairouan@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MK',
    hours: {
      weekdays: 'Lun au sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 10,
    name: 'Magasin Beja',
    phone: '36 010 375',
    email: 'beja@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MBJ',
    hours: {
      weekdays: 'Lun au Sam: 08:00 - 19:00',
      sunday: 'Dim: 09:00 - 15:00'
    }
  },
  {
    id: 11,
    name: 'Magasin Sfax 5 Août',
    phone: '36 010 384',
    email: 'sfax5@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=MS5',
    hours: {
      weekdays: 'Lun au Ven: 08:00 - 19:00',
      saturday: 'Sam: 08:00 - 17:00',
      sunday: 'Dim: Fermé'
    }
  },
  {
    id: 12,
    name: 'Service après vente',
    phone: '36 010 011',
    email: 'sav@mytek.tn',
    image: 'https://via.placeholder.com/100x100/E41F18/FFFFFF?text=SAV',
    hours: {
      weekdays: 'Lun au Ven: 08:00 - 17:30',
      saturday: 'Sam: 08:00 - 13:00',
      sunday: 'Dim: Fermé'
    }
  },
  {
    id: 13,
    name: 'Service Entreprise',
    phone: '36 010 015',
    email: 'devis@mytek.tn',
    image: 'mgtu.jfif',
    hours: {
      weekdays: 'Lun au Ven: 08:00 - 17:30',
      saturday: 'Sam: 08:00 - 13:00',
      sunday: 'Dim: Fermé'
    }
  }
];

export default function StoresGrid() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Nos Magasins</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORES.map(store => (
          <div key={store.id} className="bg-gray-100 rounded-md p-4 shadow-sm flex flex-col">
            <div className="flex mb-3">
              <div className="mr-3">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-16 h-16 rounded-full border-2 border-[#E41F18]"
                />
              </div>
              <div>
                <h3 className="font-bold text-blue-600 text-sm mb-1">{store.name}</h3>
                <p className="text-xs mb-1">
                  <span className="font-semibold">Tel:</span> {store.phone}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Mail:</span> {store.email}
                </p>
              </div>
            </div>
            
            <div>
              <p className="text-xs font-semibold mb-1">Horaires:</p>
              <p className="text-xs mb-1">{store.hours.weekdays}</p>
              {store.hours.saturday && <p className="text-xs mb-1">{store.hours.saturday}</p>}
              <p className="text-xs">{store.hours.sunday}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}