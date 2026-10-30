import React from 'react';
import { ArrowRight, Search, Sparkles, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreClick
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-stone-100 py-12 md:py-20 border-b border-stone-800">
      {/* Subtle background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tienda Oficial Bazar el Pelado</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">Selección 2026</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Artículos seleccionados para tu hogar, cocina y la pasión matera.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
              Canastas de cuero legítimo artesanal, pavas con corte mate a 80°C, cubertería de lujo, cristalería labrada y novedades prácticas para equipar tu casa con los mejores precios.
            </p>

            {/* Live Search & CTA Toolbar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Buscar pava, mate, canasta de cuero, jarra..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-stone-800/90 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              <button
                onClick={onExploreClick}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md shrink-0 cursor-pointer"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Filter suggestions */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-400">
              <span className="text-stone-500">Búsquedas rápidas:</span>
              {['Canasta matera', 'Pava Matecit', 'Mate acero', 'Exprimidor', 'Copas'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearchChange(tag)}
                  className="px-2.5 py-1 bg-stone-800/60 hover:bg-stone-800 hover:text-amber-300 rounded border border-stone-700/60 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Showcase Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="relative bg-stone-800/80 rounded-2xl p-4 sm:p-5 border border-stone-700/80 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700/60 text-xs">
                <span className="text-amber-400 font-semibold tracking-wide uppercase">
                  ⭐ Producto Estrella
                </span>
                <span className="text-stone-400 font-mono tabular-nums">
                  $32.000 ARS
                </span>
              </div>

              <div className="relative mt-3 aspect-4/3 rounded-xl overflow-hidden bg-stone-900 border border-stone-700/50">
                <img
                  src="/products/canasta_matera_marron.jpg"
                  alt="Canasta matera artesanal de cuero legítimo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-4">
                  <div className="text-xs text-amber-300 font-medium">Cuero vacuno genuino con división</div>
                  <div className="text-sm font-bold text-white">Canasta Matera Artesanal Marrón</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-300">
                <div className="bg-stone-900/60 p-2.5 rounded-lg border border-stone-700/40">
                  <span className="block text-stone-400 text-[11px]">Diseño</span>
                  <span className="font-semibold text-white">División anti-vuelco</span>
                </div>
                <div className="bg-stone-900/60 p-2.5 rounded-lg border border-stone-700/40">
                  <span className="block text-stone-400 text-[11px]">Despacho</span>
                  <span className="font-semibold text-amber-400">Inmediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacency Trust Row: 4 key trust factors, hairline separated */}
        <div className="mt-12 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">Envíos Seguros</p>
              <p className="text-stone-400 text-xs">Entregas coordinadas a tu domicilio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">Atención por WhatsApp</p>
              <p className="text-stone-400 text-xs">Trato directo con el vendedor</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">Calidad Garantizada</p>
              <p className="text-stone-400 text-xs">Revisamos cada artículo antes de enviar</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">Precios Claros</p>
              <p className="text-stone-400 text-xs">Sin costos ocultos ni sorpresas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
