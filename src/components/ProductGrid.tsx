import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 199.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "4K Drone Camera",
    price: 799.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Gaming Keyboard RGB",
    price: 159.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400"
  }
];

export default function ProductGrid() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (product: typeof products[0]) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <button 
                onClick={() => handleWishlistClick(product)}
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  className={`h-5 w-5 transition-colors ${
                    isInWishlist(product.id) 
                      ? 'text-red-500 fill-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <button className="flex items-center bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}