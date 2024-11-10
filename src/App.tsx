import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'cart' | 'wishlist'>('home');

  return (
    <WishlistProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          onCartClick={() => setCurrentPage('cart')}
          onWishlistClick={() => setCurrentPage('wishlist')}
          onLogoClick={() => setCurrentPage('home')}
        />
        <main>
          {currentPage === 'cart' ? (
            <CartPage />
          ) : currentPage === 'wishlist' ? (
            <WishlistPage />
          ) : (
            <>
              <Carousel />
              <ProductGrid />
            </>
          )}
        </main>
      </div>
    </WishlistProvider>
  );
}