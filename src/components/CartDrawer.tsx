import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';
import { Product, formatPrice, generateWhatsAppLink } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, variant: string | undefined, delta: number) => void;
  onRemoveItem: (productId: string, variant: string | undefined) => void;
  onClearCart: () => void;
}

// Store WhatsApp business number
const DEFAULT_STORE_PHONE = '5491144381533';

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
  const [customerNotes, setCustomerNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendOrder = () => {
    if (!customerName.trim()) {
      setValidationError('Por favor ingresá tu nombre para el pedido.');
      return;
    }
    if (!customerAddress.trim()) {
      setValidationError('Por favor ingresá tu dirección o localidad de entrega.');
      return;
    }

    setValidationError('');

    const link = generateWhatsAppLink(
      DEFAULT_STORE_PHONE,
      {
        name: customerName,
        phone: customerPhone || 'Sin especificar',
        address: customerAddress,
        paymentMethod,
        notes: customerNotes
      },
      items
    );

    // Open WhatsApp in a new tab/window
    window.open(link, '_blank', 'noopener,noreferrer');
    setOrderConfirmed(true);
  };

  const handleResetAfterOrder = () => {
    onClearCart();
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 text-stone-100 flex flex-col shadow-2xl border-l border-stone-800">
          {/* Header */}
          <div className="px-5 py-4 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold text-white">Tu Pedido</h2>
              {totalItemsCount > 0 && (
                <span className="text-xs font-mono tabular-nums bg-amber-400 text-stone-950 px-2 py-0.5 rounded font-bold">
                  {totalItemsCount} {totalItemsCount === 1 ? 'artículo' : 'artículos'}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar pedido"
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
            {orderConfirmed ? (
              /* Success / WhatsApp Sent State */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  ¡Pedido Enviado a WhatsApp!
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                  Se ha generado el mensaje detallado con tus datos y artículos. Bazar el Pelado responderá a la brevedad para coordinar entrega y pago.
                </p>

                <div className="bg-stone-800/80 rounded-xl p-4 text-left border border-stone-700/60 text-xs space-y-2 mt-4">
                  <div className="font-semibold text-amber-400">Resumen del Pedido:</div>
                  <div className="text-stone-300">Cliente: <span className="font-medium text-white">{customerName}</span></div>
                  <div className="text-stone-300">Entrega: <span className="font-medium text-white">{customerAddress}</span></div>
                  <div className="text-stone-300">Forma de Pago: <span className="font-medium text-white">{paymentMethod}</span></div>
                  <div className="text-stone-300 pt-1 border-t border-stone-700 font-mono tabular-nums text-sm font-bold text-white">
                    Total: {formatPrice(total)}
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      const link = generateWhatsAppLink(
                        DEFAULT_STORE_PHONE,
                        { name: customerName, phone: customerPhone, address: customerAddress, paymentMethod, notes: customerNotes },
                        items
                      );
                      window.open(link, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reenviar a WhatsApp</span>
                  </button>

                  <button
                    onClick={handleResetAfterOrder}
                    className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-medium flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Volver a la tienda</span>
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-stone-500">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-stone-200">El carrito está vacío</h3>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Agregá canastas materas, pavas, cubiertos o productos de bazar para armar tu pedido.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-stone-950 rounded-lg text-xs font-semibold hover:bg-amber-400 transition-colors"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* Items List & Customer Form */
              <>
                <div className="space-y-3 divide-y divide-stone-800">
                  {items.map((item, index) => {
                    const itemKey = `${item.product.id}-${item.selectedVariant || 'default'}-${index}`;
                    return (
                      <div key={itemKey} className="pt-3 first:pt-0 flex gap-3 items-center">
                        {item.product.video ? (
                          <video
                            src={item.product.video}
                            aria-label={item.product.name}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-16 h-16 rounded-lg object-cover bg-stone-800 shrink-0 border border-stone-700/60"
                          />
                        ) : item.product.image ? (
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-lg object-cover bg-stone-800 shrink-0 border border-stone-700/60"
                          />
                        ) : null}

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-semibold text-white line-clamp-1">
                            {item.product.name}
                          </h4>
                          {item.selectedVariant && (
                            <p className="text-[11px] text-amber-400">
                              Variante: {item.selectedVariant}
                            </p>
                          )}
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xs font-mono tabular-nums text-stone-300 font-bold">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              ({formatPrice(item.product.price)} c/u)
                            </span>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1 bg-stone-800 rounded-lg p-1 border border-stone-700/60 shrink-0">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant, -1)}
                            className="p-1 text-stone-400 hover:text-white transition-colors"
                            aria-label="Restar 1"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono tabular-nums px-1.5 font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant, 1)}
                            className="p-1 text-stone-400 hover:text-white transition-colors"
                            aria-label="Sumar 1"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedVariant)}
                          aria-label={`Eliminar ${item.product.name}`}
                          className="p-1 text-stone-500 hover:text-red-400 transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotal strip */}
                <div className="bg-stone-800/80 rounded-xl p-3 border border-stone-700/60 space-y-1.5 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal de productos:</span>
                    <span className="font-mono tabular-nums text-white">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Costo de envío:</span>
                    <span className="text-emerald-400 font-medium">A coordinar por WhatsApp</span>
                  </div>
                  <div className="pt-2 border-t border-stone-700 flex justify-between font-bold text-sm text-white">
                    <span>Total estimado:</span>
                    <span className="font-mono tabular-nums text-amber-400 text-base">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Direct Order Form */}
                <div className="pt-2 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Datos para tu Pedido
                  </h3>

                  {validationError && (
                    <div className="p-2.5 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-lg">
                      {validationError}
                    </div>
                  )}

                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Laura Gómez"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 font-medium mb-1">
                        Tu Teléfono / WhatsApp (Opcional)
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej: 11 5555-5555"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 font-medium mb-1">
                        Dirección de Envío o Retiro *
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Av. San Martín 1420, Barrio Centro"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 font-medium mb-1">
                        Medio de Pago Preferido
                      </label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Efectivo en Entrega">Efectivo al recibir</option>
                        <option value="Transferencia Bancaria / Alias">Transferencia Bancaria (Alias / CBU)</option>
                        <option value="Mercado Pago / QR">Mercado Pago / QR</option>
                        <option value="Tarjeta de Débito/Crédito">Tarjeta en el local</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-300 font-medium mb-1">
                        Aclaraciones o notas (Opcional)
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Entregar por la tarde, color preferido..."
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with WhatsApp Primary CTA */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-4 border-t border-stone-800 bg-stone-950/80 space-y-2">
              <button
                onClick={handleSendOrder}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirmar Pedido por WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Compra 100% segura
                </span>
                <button
                  onClick={onClearCart}
                  className="text-stone-500 hover:text-stone-300 underline"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
