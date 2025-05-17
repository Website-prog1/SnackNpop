import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const products = [
  // SHAKAPOPS
  {
    id: 1,
    name: "V'Pops Classic",
    description: "Our signature chicken and vegetable poppers with a mild seasoning blend that everyone loves.",
    image: `${import.meta.env.BASE_URL}images/SHAKAPOPS/V_Pops Classic_.png`,
    category: "shakapops",
    popular: true,
  },
  {
    id: 2,
    name: "Spicy ShakaPops",
    description: "For those who like it hot! Our poppers with a spicy kick that's sure to satisfy your cravings.",
    image: `${import.meta.env.BASE_URL}images/SHAKAPOPS/Spicy ShakaPops_.png`,
    category: "shakapops",
    popular: true,
  },
  {
    id: 3,
    name: "Cheesy ShakaPops",
    description: "A delicious blend of cheese and herbs makes these poppers especially flavorful and satisfying.",
    image: `${import.meta.env.BASE_URL}images/SHAKAPOPS/Cheesy ShakaPops_.png`,
    category: "shakapops",
    popular: false,
  },
  {
    id: 4,
    name: "BBQ ShakaPops",
    description: "Sweet and smoky BBQ flavor that adds a delicious twist to our classic poppers.",
    image: `${import.meta.env.BASE_URL}images/SHAKAPOPS/BBQ ShakaPops_.png`,
    category: "shakapops",
    popular: false,
  },
  {
    id: 5,
    name: "Sour Cream ShakaPops",
    description: "Creamy and tangy sour cream flavor that perfectly complements our chicken poppers.",
    image: `${import.meta.env.BASE_URL}images/SHAKAPOPS/Sour Cream ShakaPops_.png`,
    category: "shakapops",
    popular: false,
  },
  
  // Combo Meals
  {
    id: 6,
    name: "V'Pops Meal 1 (Plain Rice)",
    description: "Classic V'Pops served with plain rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM1(Plain_Rice).jpg`,
    category: "meals",
    popular: true,
  },
  {
    id: 7,
    name: "V'Pops Meal 1 (Java Rice)",
    description: "Classic V'Pops served with flavorful java rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM1(Java_Rice).jpg`,
    category: "meals",
    popular: true,
  },
  {
    id: 8,
    name: "V'Pops Meal 2 (Plain Rice)",
    description: "Spicy V'Pops paired with plain rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM2(Plain_Rice).jpg`,
    category: "meals",
    popular: false,
  },
  {
    id: 9,
    name: "V'Pops Meal 2 (Java Rice)",
    description: "Spicy V'Pops paired with java rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM2(Java_Rice).jpg`,
    category: "meals",
    popular: false,
  },
  {
    id: 10,
    name: "V'Pops Meal 3 (Plain Rice)",
    description: "Cheesy V'Pops served with plain rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM3(Plain_Rice).jpg`,
    category: "meals",
    popular: false,
  },
  {
    id: 11,
    name: "V'Pops Meal 3 (Java Rice)",
    description: "Cheesy V'Pops served with java rice and your choice of sauce.",
    image: `${import.meta.env.BASE_URL}images/V_Pops Combo Meal/VM3(Java_Rice).jpg`,
    category: "meals",
    popular: false,
  },
  
  // Drinks
  {
    id: 12,
    name: "Iced Tea",
    description: "Refreshing iced tea to complement your meal.",
    image: `${import.meta.env.BASE_URL}images/DRINKS/Iced Tea.jpg`,
    category: "drinks",
    popular: true,
  },
  {
    id: 13,
    name: "Blue Lemonade",
    description: "A refreshing and vibrant blue lemonade that's both sweet and tangy.",
    image: `${import.meta.env.BASE_URL}images/DRINKS/Blue Lemonade_.jpg`,
    category: "drinks",
    popular: false,
  },
  {
    id: 14,
    name: "Pineapple Juice",
    description: "Sweet and tropical pineapple juice made from fresh pineapples.",
    image: `${import.meta.env.BASE_URL}images/DRINKS/Pineapple Juice.jpg`,
    category: "drinks",
    popular: false,
  },
  
  // Sauces
  {
    id: 15,
    name: "Garlic Mayo",
    description: "Creamy garlic mayonnaise sauce that adds a rich and flavorful touch.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/Garlic Mayo.jpg`,
    category: "sauces",
    popular: true,
  },
  {
    id: 16,
    name: "Sweet & Chili",
    description: "Perfect balance of sweet and spicy flavors.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/Sweet & Chili.jpg`,
    category: "sauces",
    popular: true,
  },
  {
    id: 17,
    name: "Gravy",
    description: "Rich and savory gravy sauce that enhances the flavor of your meal.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/Gravy_.jpg`,
    category: "sauces",
    popular: false,
  },
  {
    id: 18,
    name: "Buffalo",
    description: "Spicy buffalo sauce for those who love a kick of heat.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/Buffalo_.jpg`,
    category: "sauces",
    popular: false,
  },
  {
    id: 19,
    name: "Teriyaki",
    description: "Sweet and savory Japanese-style teriyaki sauce.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/Teriyaki_.jpg`,
    category: "sauces",
    popular: false,
  },
  {
    id: 20,
    name: "BBQ",
    description: "Classic BBQ sauce with a perfect blend of sweet and smoky flavors.",
    image: `${import.meta.env.BASE_URL}images/SAUCE/BBQ.jpg`,
    category: "sauces",
    popular: false,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-400 py-24 md:py-32 mb-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}images/popcorn_chicken.jpg)`,
            }}
          ></div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Our Delicious Products
              </h1>
              <p className="text-orange-50 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Discover our range of delicious and nutritious V'Pops and complementary offerings. 
                All made with premium ingredients and a focus on great taste and nutrition.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="container -mt-8">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full mb-16">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-5 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <TabsTrigger value="all" className="text-sm rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm">All</TabsTrigger>
              <TabsTrigger value="shakapops" className="text-sm rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm">ShakaPops</TabsTrigger>
              <TabsTrigger value="meals" className="text-sm rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm">Meals</TabsTrigger>
              <TabsTrigger value="drinks" className="text-sm rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm">Drinks</TabsTrigger>
              <TabsTrigger value="sauces" className="text-sm rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm">Sauces</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden relative bg-orange-50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.popular && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white border-none shadow-md">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display text-xl font-bold text-gray-800">{product.name}</h3>
                        <Badge variant="outline" className="text-xs capitalize border-orange-200 text-orange-600 bg-orange-50">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {['shakapops', 'meals', 'drinks', 'sauces'].map((category) => (
              <TabsContent key={category} value={category} className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.category === category).map((product) => (
                    <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="aspect-[4/3] overflow-hidden relative bg-orange-50">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.popular && (
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white border-none shadow-md">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Sustainability Section */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-12 rounded-3xl shadow-lg mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Sustainability in Every Bite
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                At Snack N'Pop, we're committed to sustainability. All our packaging is environmentally friendly, 
                minimizing waste and our ecological footprint. Enjoy your favorite snacks knowing you're making a choice 
                that's good for both you and the planet.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/popcorn_chicken.jpg`}
                  alt="Eco-friendly packaging" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
