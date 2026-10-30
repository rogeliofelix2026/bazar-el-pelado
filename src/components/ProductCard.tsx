import React, { useState } from 'react';
import { Eye, Plus, Check, MessageCircle } from 'lucide-react';
import { Product, formatPrice } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, variant?: string) => void;
  onInstantWhatsApp: (product: Product, variant?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  onInstantWhatsApp
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants ? product.variants[0] : undefined
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1, selectedVariant);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    onInstantWhatsApp(product, selectedVariant);
  };

  return (
    <article
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      {/* Product Image Stage (65-75% visual weight) */}
      <div className="relative aspect-square w-full bg-stone-100 overflow-hidden">
        {product.video ? (
          <video
            src={product.video}
            aria-label={product.name}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
        ) : product.image ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
          />
        ) : null}

        {/* Subtle single tag (no pill cluster) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-amber-300 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
            {product.badge}
          </div>
        )}

        {/* Quick view hover icon button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          aria-label={`Ver detalles de ${product.name}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-white flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Material ribbon on image bottom */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/75 via-stone-950/30 to-transparent p-2.5 pt-6 text-[11px] text-stone-200">
          <span className="truncate block font-medium">
            {product.material}
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div>
          {/* Unboxed clean metadata with dot separator */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium tracking-wide uppercase mb-1">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700">En stock</span>
          </div>

          <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          <p className="mt-1 text-xs text-stone-500 line-clamp-2 font-normal leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Variants selector if available */}
        {product.variants && product.variants.length > 0 && (
          <div className="pt-1" onClick={(e) => e.stopPropagation()}>
            <label className="block text-[11px] font-semibold text-stone-600 mb-1">
              Variante / Color:
            </label>
            <div className="flex flex-wrap gap-1">
              {product.variants.slice(0, 4).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                    selectedVariant === v
                      ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold'
                      : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
                  }`}
                >
                  {v}
                </button>
              ))}
              {product.variants.length > 4 && (
                <span className="text-[11px] text-stone-400 self-center">
                  +{product.variants.length - 4} más
                </span>
              )}
            </div>
          </div>
        )}

        {/* Pricing and Actions Row */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-xs text-stone-400 block font-normal">Precio</span>
            <span className="text-lg font-bold font-mono tabular-nums text-stone-950">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleWhatsApp}
              title="Consultar o comprar directo por WhatsApp"
              className="p-2 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg border border-stone-200 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleAdd}
              disabled={addedAnimation}
              className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Agregado</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Agregar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
