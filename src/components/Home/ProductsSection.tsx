import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  // Drinks
  {
    id: 12,
    name: "Iced Tea",
    description: "Refreshing iced tea to complement your meal.",
    image: `${import.meta.env.BASE_URL}images/DRINKS/Iced Tea.jpg`,
    category: "drinks",
    popular: true,
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-snackpop-lightbg py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block text-snackpop-orange font-semibold mb-2 border-b-2 border-snackpop-orange pb-2">
            Our Products
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Discover Our Delicious V'Pops
          </h2>
          <p className="text-gray-700 text-sm">
            Enjoy the perfect blend of chicken and vegetables in our signature poppers. 
            A tasty treat that's both satisfying and nutritious.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => window.location.href = '/products'}
            >
              <div className="relative aspect-square bg-orange-50">
                <div className="absolute inset-0 p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {product.popular && (
                  <Badge className="absolute top-3 right-3 bg-snackpop-orange">Popular</Badge>
                )}
                <Badge variant="outline" className="absolute bottom-3 left-3 bg-white/90 text-xs capitalize">
                  {product.category}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-snackpop-orange hover:bg-snackpop-yellow text-white">
            <Link to="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
