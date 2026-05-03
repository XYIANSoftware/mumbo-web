'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from 'primereact/button';

interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'clothing' | 'accessories' | 'music';
  available: boolean;
}

const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'DJ Mumbo T-Shirt',
    description: 'Classic black t-shirt with the iconic DJ Mumbo logo',
    price: 25,
    image: '/images/mumbo-assets/M_B04850-1-NR.jpg',
    category: 'clothing',
    available: true
  },
  {
    id: '2',
    name: 'Mumbo Hoodie',
    description: 'Comfortable hoodie featuring the Mumbo design',
    price: 45,
    image: '/images/mumbo-assets/M_B04851-1-NR.jpg',
    category: 'clothing',
    available: true
  },
  {
    id: '3',
    name: 'DJ Mumbo Cap',
    description: 'Stylish cap with embroidered Mumbo logo',
    price: 20,
    image: '/images/mumbo-assets/M_B04855-1-NR.jpg',
    category: 'accessories',
    available: true
  },
  {
    id: '4',
    name: 'Mumbo Stickers Pack',
    description: 'Set of 5 high-quality vinyl stickers',
    price: 8,
    image: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
    category: 'accessories',
    available: true
  },
  {
    id: '5',
    name: 'Feelin\' Pretty Suavé Vinyl',
    description: 'Limited edition vinyl of the hit single',
    price: 35,
    image: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
    category: 'music',
    available: false
  },
  {
    id: '6',
    name: 'Mumbo Wristband',
    description: 'Glow-in-the-dark wristband for the ultimate fan',
    price: 12,
    image: '/images/mumbo-assets/IMG_7892.JPG',
    category: 'accessories',
    available: true
  }
];

export default function MerchPage() {
  const handlePurchase = (item: MerchItem) => {
    // This would typically integrate with a payment processor
    alert(`Purchase functionality coming soon! You selected: ${item.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
             <PageHeader
         title="Merch"
         subtitle="Show your support with official DJ Mumbo merchandise"
       />
       <div className="text-center mb-8">
         <p className="text-xl text-primary-light font-semibold">Coming soon…🎬</p>
       </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {['all', 'clothing', 'accessories', 'music'].map((category) => (
            <Button
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              className="p-button-outlined"
              size="small"
            />
          ))}
        </div>
      </div>

             {/* Merch Grid */}
       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {merchItems.map((item, index) => (
           <motion.div
             key={item.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
           >
             <Card className="h-full">
               <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                 />
                 {!item.available && (
                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                     <span className="text-white font-semibold text-lg">Sold Out</span>
                   </div>
                 )}
                 <div className="absolute top-2 right-2">
                   <span className="inline-block px-2 py-1 rounded-full bg-primary-light/20 text-primary-light text-xs font-semibold">
                     {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                   </span>
                 </div>
               </div>
               
               <div className="flex flex-col h-full">
                 <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                 <p className="text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
                 
                 <div className="flex items-center justify-between">
                   <span className="text-2xl font-bold text-primary-light">${item.price}</span>
                   <Button
                     label={item.available ? "Buy Now" : "Notify Me"}
                     icon={item.available ? "pi pi-shopping-cart" : "pi pi-bell"}
                     className={item.available ? "p-button-primary" : "p-button-secondary"}
                     size="small"
                     disabled={!item.available}
                     onClick={() => handlePurchase(item)}
                   />
                 </div>
               </div>
             </Card>
           </motion.div>
         ))}
       </div> */}

             {/* Coming Soon Section */}
       {/* <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.6 }}
         className="mt-16 text-center"
       >
         <Card className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 border-primary-light/20">
           <h2 className="text-2xl font-bold mb-4">More Merch Coming Soon!</h2>
           <p className="text-gray-400 mb-6">
             We're working on bringing you even more amazing merchandise. 
             Stay tuned for new releases and limited edition items!
           </p>
           <Button
             label="Join Mailing List"
             icon="pi pi-envelope"
             className="p-button-outlined"
           />
         </Card>
       </motion.div> */}
    </div>
  );
} 