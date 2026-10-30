import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck, Truck, Check } from 'lucide-react';
import { Product, formatPrice } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, variant?: string) => void;
  onInstantWhatsApp: (product: Product, variant?: string, quantity?: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onInstantWhatsApp
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants ? product.variants[0] : undefined
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedVariant);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleWhatsApp = () => {
    onInstantWhatsApp(product, selectedVariant, quantity);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image Stage */}
          <div className="relative bg-stone-100 min-h-[320px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-stone-200">
            {product.video ? (
              <video
                src={product.video}
                aria-label={product.name}
                controls
                autoPlay
                muted
                playsInline
                className="max-h-[360px] md:max-h-[460px] w-full object-contain rounded-lg shadow-sm"
              />
            ) : product.image ? (
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-[360px] md:max-h-[460px] w-auto object-contain rounded-lg shadow-sm"
              />
            ) : null}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-stone-900 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded tracking-wider uppercase">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Contiguous Purchase Module */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-semibold mb-2">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-medium">Disponible</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono tabular-nums text-stone-950">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-stone-500 font-medium">ARS</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Variant selection */}
              {product.variants && (
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide mb-2">
                    Elegir Variante / Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                          selectedVariant === v
                            ? 'border-amber-600 bg-amber-50 text-amber-950 ring-1 ring-amber-600 font-semibold'
                            : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mt-5 pt-4 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-2">
                  Características principales:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {product.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech details table if available */}
              {product.details && (
                <div className="mt-4 bg-stone-50 rounded-lg p-3 text-xs border border-stone-200/60 space-y-1">
                  {Object.entries(product.details).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-0.5 border-b border-stone-200/40 last:border-0">
                      <span className="text-stone-500">{key}:</span>
                      <span className="font-medium text-stone-800 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Purchase Controls */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              {/* Quantity Stepper */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-700">Cantidad:</span>
                <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Disminuir cantidad"
                    className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-semibold font-mono tabular-nums text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Aumentar cantidad"
                    className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={justAdded}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white active:scale-98'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Agregado al pedido!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar al Carrito</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comprar por WhatsApp</span>
                </button>
              </div>

              {/* Trust markers */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  Envío a convenir
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                  Garantía de Bazar el Pelado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
