import React from 'react';
import { MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-xs">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <span className="font-display text-xl font-extrabold text-white tracking-tight">
              Bazar el Pelado
            </span>
            <p className="text-stone-400 leading-relaxed">
              Venta de artículos de bazar, set materos en cuero vacuno legítimo, cristalería y novedades para el hogar.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Atención activa vía WhatsApp</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Categorías
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Línea Matera Artesanal</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Pavas Eléctricas con Corte</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Cocina & Molinillos</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Copas & Cristalería Fina</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Cuidado & Hogar</a></li>
            </ul>
          </div>

          {/* Buying Info */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Formas de Compra
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Envíos a domicilio y puntos de entrega</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Despachos en 24 a 48 hs</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Pagos en efectivo, transferencia o QR</span>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Contacto Inmediato
            </h4>
            <p className="text-stone-400">
              Hacé clic abajo para escribirnos directamente y consultar disponibilidad o hacer tu pedido.
            </p>
            <a
              href="https://wa.me/5491138521006?text=Hola%20Bazar%20el%20Pelado,%20quisiera%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp de Ventas</span>
            </a>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Bazar el Pelado. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span>Precios en Pesos ($ ARS)</span>
            <span aria-hidden="true">·</span>
            <span>Venta directa al público</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
