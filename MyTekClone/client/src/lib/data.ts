import { ReactNode } from 'react';

// Image URLs for product categories
const IMAGE_URLS = {
  laptop: 'https://via.placeholder.com/400x300/2563eb/FFFFFF?text=Ordinateur',
  smartphone: 'https://via.placeholder.com/400x300/dc2626/FFFFFF?text=Smartphone',
  console: 'https://via.placeholder.com/400x300/4f46e5/FFFFFF?text=Console',
  headphones: 'https://via.placeholder.com/400x300/7c3aed/FFFFFF?text=Casque',
  tablet: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Tablette',
  smartwatch: 'https://via.placeholder.com/400x300/0369a1/FFFFFF?text=Montre',
  speaker: 'https://via.placeholder.com/400x300/9d174d/FFFFFF?text=Enceinte',
  keyboard: 'https://via.placeholder.com/400x300/374151/FFFFFF?text=Clavier',
  mouse: 'https://via.placeholder.com/400x300/1e40af/FFFFFF?text=Souris',
  ssd: 'https://via.placeholder.com/400x300/7c2d12/FFFFFF?text=SSD'
};

// Product type
export interface Product {
  id: number;
  name: string;
  category: string;
  categoryId: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
}

// Featured products data
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 13\" M1 8Go 256Go SSD",
    category: "Ordinateur portable",
    categoryId: "laptops",
    price: 3799,
    oldPrice: 4499,
    image: "macbook.png",
    rating: 4.5,
    reviews: 42,
    discount: 15
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra 5G 256Go",
    category: "Smartphone",
    categoryId: "smartphones",
    price: 3199,
    image: "s21.jfif",
    rating: 5,
    reviews: 87,
    isNew: true
  },
  {
    id: 3,
    name: "PlayStation 5 Édition Standard",
    category: "Console de jeu",
    categoryId: "gaming",
    price: 2499,
    oldPrice: 2799,
    image: "play.jfif",
    rating: 4,
    reviews: 56,
    discount: 10
  },
  {
    id: 4,
    name: "Apple AirPods Pro avec boîtier de charge",
    category: "Écouteurs sans fil",
    categoryId: "accessories",
    price: 899,
    image: "air.jfif",
    rating: 4.5,
    reviews: 132
  },
  {
    id: 5,
    name: "iPad Pro 11\" 256Go Wi-Fi",
    category: "Tablette",
    categoryId: "tablets",
    price: 2649,
    oldPrice: 3299,
    image:"ipad.jfif",
    rating: 4,
    reviews: 28,
    discount: 20
  }
];

// Product grid data
export const products: Product[] = [
  {
    id: 101,
    name: "iPhone 13 Pro Max 256Go",
    category: "Smartphone",
    categoryId: "smartphones",
    price: 4899,
    image: "12p.jfif",
    rating: 4.5,
    reviews: 75,
    isNew: true
  },
  {
    id: 102,
    name: "Dell XPS 13 i7 16Go RAM 512Go SSD",
    category: "Ordinateur portable",
    categoryId: "laptops",
    price: 4999,
    oldPrice: 5299,
    image: "dell.jfif",
    rating: 4,
    reviews: 32,
    discount: 5
  },
  {
    id: 103,
    name: "Sony WH-1000XM4 Bluetooth à réduction de bruit",
    category: "Casque audio",
    categoryId: "accessories",
    price: 899,
    image: "sony.jfif",
    rating: 5,
    reviews: 102
  },
  {
    id: 104,
    name: "Apple Watch Series 7 GPS 45mm",
    category: "Montre connectée",
    categoryId: "accessories",
    price: 1599,
    oldPrice: 1899,
    image: "wat.jfif",
    rating: 4,
    reviews: 43,
    discount: 15
  },
  {
    id: 105,
    name: "JBL Charge 5 Bluetooth Waterproof",
    category: "Enceinte portable",
    categoryId: "accessories",
    price: 399,
    image: "jbl.jfif",
    rating: 4.5,
    reviews: 58
  },
  {
    id: 106,
    name: "Razer Huntsman Elite RGB mécanique",
    category: "Clavier gamer",
    categoryId: "gaming",
    price: 499,
    image: "raz.jfif",
    rating: 4,
    reviews: 22,
    isNew: true
  },
  {
    id: 107,
    name: "Logitech G Pro X Superlight Wireless",
    category: "Souris gamer",
    categoryId: "gaming",
    price: 349,
    image: "g.jfif",
    rating: 5,
    reviews: 89
  },
  {
    id: 108,
    name: "Samsung 970 EVO Plus 1TB NVMe M.2",
    category: "Disque SSD",
    categoryId: "accessories",
    price: 479,
    oldPrice: 529,
    image: "ssd.jfif",
    rating: 4.5,
    reviews: 114,
    discount: 10
  }
];
