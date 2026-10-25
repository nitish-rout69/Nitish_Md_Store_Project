import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import Hero from '@/components/Hero';
import InfoBar from '@/components/InfoBar';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import PromoBanner from '@/components/PromoBanner';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer, { type CartItem } from '@/components/CartDrawer';
import type { Product } from '@/data/products';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} onSearch={setSearchQuery} />
      <Marquee />
      <Hero />
      <InfoBar />
      <Categories />
      <Products onAddToCart={addToCart} searchQuery={searchQuery} />
      <PromoBanner />
      <Services />
      <About />
      <Contact />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;
