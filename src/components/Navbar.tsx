import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Laptop } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

interface NavbarProps {
  onCartClick: () => void;
  onWishlistClick: () => void;
  onLogoClick: () => void;
}

export default function Navbar({ onCartClick, onWishlistClick, onLogoClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { wishlistItems } = useWishlist();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div 
              onClick={onLogoClick}
              className="flex-shrink-0 flex items-center gap-2 text-indigo-600 cursor-pointer"
            >
              <Laptop className="h-8 w-8" />
              <span className="font-bold text-xl">TechMart</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search products..."
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center text-gray-700 hover:text-indigo-600">
              <User className="h-6 w-6" />
              <span className="ml-1 text-sm hidden sm:block">Sign In</span>
            </button>
            <button 
              onClick={onWishlistClick}
              className="flex items-center text-gray-700 hover:text-indigo-600 relative"
            >
              <Heart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={onCartClick}
              className="flex items-center text-gray-700 hover:text-indigo-600 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}