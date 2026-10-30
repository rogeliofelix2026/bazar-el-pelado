import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, PhoneCall } from 'lucide-react';

export const AboutCraft: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Sobre Bazar el Pelado
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-snug">
              Tradición matera y artículos nobles para todos los hogares
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              En <strong>Bazar el Pelado</strong> nos dedicamos a seleccionar piezas prácticas, duraderas y de alta estética. Desde canastas materas cosidas a mano en cuero vacuno genuino hasta pavas eléctricas especializadas con corte térmico, cuidamos cada detalle para que tu compra sea una inversión para toda la vida.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Materiales Nobles</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Cuero legítimo, acero inoxidable y vidrio templado libre de tóxicos.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-amber-600" />
                  <span>Trato Directo</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Hablás directamente con nosotros para acordar colores, envíos y pagos.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Control de Calidad</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Cada producto es testeado y embalado con protección antes del despacho.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Contact Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-stone-900">
                    ¿Tenés alguna duda o pedido especial?
                  </h3>
                  <p className="text-xs text-stone-500">
                    Respondemos tus consultas de inmediato
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Si buscás un color específico de mate, canasta o querés hacer compras por cantidad, escribinos directamente por WhatsApp y te enviamos fotos en vivo de los productos en stock.
              </p>

              <a
                href="https://wa.me/5491138521006?text=Hola%20Bazar%20el%20Pelado,%20quisiera%20hacer%20una%20consulta%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <span>Chatear con Bazar el Pelado</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
