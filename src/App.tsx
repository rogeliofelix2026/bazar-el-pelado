'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { AboutCraft } from './components/AboutCraft';
import { Footer } from './components/Footer';
import {
  PRODUCTS,
  CATEGORIES,
  CategoryFilter,
  Product,
  formatPrice,
  generateWhatsAppLink
} from './data/products';
import { SlidersHorizontal, MessageCircle, ArrowUp } from 'lucide-react';

const STORE_WHATSAPP = '5491144381533';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bazar_el_pelado_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      setCart([]);
    }
    setCartLoaded(true);
  }, []);

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    if (!cartLoaded) return;
    try {
      localStorage.setItem('bazar_el_pelado_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart, cartLoaded]);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, variant?: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === variant
      );

      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prevCart, { product, quantity, selectedVariant: variant }];
      }
    });

    const variantLabel = variant ? ` (${variant})` : '';
    showToast(`Se agregó "${product.name}${variantLabel}" al pedido`);
  };

  const handleUpdateQuantity = (productId: string, variant: string | undefined, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId && item.selectedVariant === variant) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveFromCart = (productId: string, variant: string | undefined) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedVariant === variant)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Direct instant WhatsApp purchase for a single item
  const handleInstantWhatsApp = (product: Product, variant?: string, quantity = 1) => {
    const variantText = variant ? ` en variante ${variant}` : '';
    const message = `¡Hola Bazar el Pelado! 👋\nQuiero consultar/comprar directamente el producto:\n\n*${product.name}*${variantText}\nCantidad: ${quantity}\nPrecio unitario: ${formatPrice(product.price)}\nTotal estimado: ${formatPrice(product.price * quantity)}\n\n¿Tienen stock disponible para entrega o retiro? ¡Muchas gracias!`;
    const url = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        activeCategory === 'Todos' || product.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [activeCategory, searchQuery, sortOption]);

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 selection:bg-amber-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-stone-700 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => setActiveCategory(cat as CategoryFilter)}
        activeCategory={activeCategory}
      />

      {/* Storefront Hero */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onExploreClick={() => {
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Catalog Section */}
      <main id="catalogo" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category & Sorting Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          {/* Functional Segmented Controls / Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'Todos'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat}
                  <span className={`ml-1.5 text-[11px] font-mono tabular-nums ${
                    activeCategory === cat ? 'text-amber-400' : 'text-stone-400'
                  }`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sorter & Counter */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-stone-600">
            <span className="text-stone-500 font-mono tabular-nums">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </span>

            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-amber-500"
              >
                <option value="default">Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre: A - Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active search filter feedback */}
        {searchQuery && (
          <div className="pt-4 flex items-center justify-between text-xs text-stone-600 bg-amber-50/70 border border-amber-200/60 rounded-lg px-3.5 py-2 my-4">
            <span>
              Resultados para la búsqueda: <strong className="text-stone-900 font-semibold">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-800 hover:underline font-semibold"
            >
              Quitar filtro
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-stone-800">
              No se encontraron productos
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              No encontramos coincidencias para "{searchQuery}". Probá buscando por "cuero", "pava", "acero" o seleccioná otra categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Todos');
              }}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800"
            >
              Restablecer todos los filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setModalProduct(p)}
                onAddToCart={handleAddToCart}
                onInstantWhatsApp={handleInstantWhatsApp}
              />
            ))}
          </div>
        )}
      </main>

      {/* Craft & Quality Story Section */}
      <AboutCraft />

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onAddToCart={handleAddToCart}
        onInstantWhatsApp={handleInstantWhatsApp}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(
          '¡Hola Bazar el Pelado! Estuve mirando su catálogo web y quisiera hacerles una consulta.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
          Consultas WhatsApp
        </span>
      </a>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          className="fixed bottom-6 left-6 z-40 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-200 p-2.5 rounded-full shadow-md transition-all active:scale-90"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
