import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '../data/products';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onSelectCategory,
  activeCategory
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Promotion bar */}
      <div className="bg-amber-600 text-stone-950 text-xs font-semibold px-4 py-1.5 text-center flex items-center justify-center gap-3">
        <span>🇦🇷 ¡Atención directa y envíos personalizados!</span>
        <span aria-hidden="true" className="opacity-60">·</span>
        <span>Coordiná tu compra por WhatsApp en un clic</span>
      </div>

      {/* Top Bar Contract: 3 zones, gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('Todos');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-baseline gap-2 whitespace-nowrap shrink-0"
        >
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Bazar el Pelado
          </span>
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase">
            Tienda
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <button
            onClick={() => {
              onSelectCategory('Todos');
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white pb-1 ${
              activeCategory === 'Todos' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : ''
            }`}
          >
            Catálogo
          </button>
          <button
            onClick={() => {
              onSelectCategory('Línea Mate');
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white pb-1 ${
              activeCategory === 'Línea Mate' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : ''
            }`}
          >
            Línea Mate
          </button>
          <button
            onClick={() => {
              onSelectCategory('Cocina & Bazar');
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white pb-1 ${
              activeCategory === 'Cocina & Bazar' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : ''
            }`}
          >
            Bazar & Cocina
          </button>
          <button
            onClick={() => {
              onSelectCategory('Mesa & Cristalería');
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white pb-1 ${
              activeCategory === 'Mesa & Cristalería' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : ''
            }`}
          >
            Cristalería & Mesa
          </button>
          <a
            href="#contacto"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-white pb-1 text-stone-300"
          >
            Contacto & Pedidos
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Cart Drawer Trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de compras"
            className="relative flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-stone-950" />
            <span className="hidden sm:inline">Mi Pedido</span>
            {cartCount > 0 && (
              <span className="bg-stone-950 text-amber-400 px-1.5 py-0.5 rounded text-xs font-mono tabular-nums font-bold">
                {cartCount}
              </span>
            )}
            {cartTotal > 0 && (
              <span className="hidden lg:inline font-mono tabular-nums text-stone-900 border-l border-amber-600/30 pl-2">
                {formatPrice(cartTotal)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
