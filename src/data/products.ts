export interface Product {
  id: string;
  name: string;
  category: 'Línea Mate' | 'Cocina & Bazar' | 'Cuidado & Hogar' | 'Mesa & Cristalería' | 'Cubertería & Mesa';
  price: number;
  image?: string;
  video?: string;
  material: string;
  description: string;
  highlights: string[];
  badge?: string;
  inStock: boolean;
  variants?: string[];
  details?: { [key: string]: string };
}

export const PRODUCTS: Product[] = [
  {
    id: 'canasta-matera-marron',
    name: 'Canasta Matera de Cuero con División - Marrón',
    category: 'Línea Mate',
    price: 32000,
    image: '/products/canasta_matera_marron.jpg',
    material: 'Cuero genuino vacuno',
    description: 'Canasta matera artesanal confeccionada en cuero vacuno legítimo de excelente espesor y rigidez. Posee tabique divisor interno para mantener firmes el termo y el mate en todo momento, evitando vuelcos en el auto o traslados. Costuras reforzadas a la vista en hilo encerado.',
    highlights: [
      'Cuero 100% legítimo vacuno',
      'División interna funcional termo/mate',
      'Costuras artesanales reforzadas',
      'Asa anatómica de cuero'
    ],
    badge: 'Artesanal',
    inStock: true,
    details: {
      'Material': 'Cuero vacuno legítimo',
      'Color': 'Marrón suela rústico',
      'Compartimentos': 'División central para termo y accesorios',
      'Origen': 'Fabricación artesanal'
    }
  },
  {
    id: 'pava-electrica-matecit',
    name: 'Pava Eléctrica MATECIT 2L con Corte para Mate',
    category: 'Línea Mate',
    price: 20000,
    image: '/products/pava_electrica_matecit.jpg',
    material: 'Cuerpo en Acero Inoxidable',
    description: 'Pava eléctrica de 2 litros de capacidad de la prestigiosa marca MATECIT. Diseñada especialmente para materos: incorpora llave selectora de temperatura dual para hervir agua a 100°C (café/té) o realizar corte automático a temperatura justa de mate (~80°C) sin quemar la yerba.',
    highlights: [
      'Capacidad familiar de 2 Litros',
      'Selector especial con corte óptimo para mate',
      'Cuerpo en acero inoxidable cepillado',
      'Base conectora giratoria 360°'
    ],
    badge: 'Más Vendido',
    inStock: true,
    details: {
      'Marca': 'MATECIT 🧉',
      'Capacidad': '2 Litros',
      'Modos': 'Hervidora (100°C) y Corte Mate (~80°C)',
      'Material': 'Acero inoxidable y polímero térmico'
    }
  },
  {
    id: 'mate-decoracion-dorada',
    name: 'Mate Térmico de Acero con Virola Dorada Labrada',
    category: 'Línea Mate',
    price: 17000,
    image: '/products/mate_decoracion_dorada.jpg',
    material: 'Acero inoxidable doble capa + Símil cuero',
    description: 'Mate térmico de acero inoxidable doble capa que conserva la temperatura del agua por mucho más tiempo sin calentar el exterior. No absorbe olores, no junta hongos y no requiere curado previo. Destaca por su virola repujada con acabado dorado brillante y cuerpo texturado símil cuero.',
    highlights: [
      'Interior de acero inoxidable higiénico',
      'Virola con relieve decorativo dorado',
      'Aislación térmica doble pared',
      'Textura exterior símil reptil antideslizante'
    ],
    badge: 'Popular',
    inStock: true,
    variants: ['Marrón Suela', 'Negro Ébano', 'Rosa Nude', 'Verde Esmeralda', 'Gris Grafito', 'Terracota'],
    details: {
      'Capacidad': '220 ml aprox.',
      'Mantenimiento': 'Lavado instantáneo, no requiere curado',
      'Virola': 'Grabado ornamental dorado',
      'Colores': 'Variedad a elección'
    }
  },
  {
    id: 'canasta-matera-negra',
    name: 'Canasta Matera de Cuero con División - Negro Grabado',
    category: 'Línea Mate',
    price: 32000,
    image: '/products/canasta_matera_negra.jpg',
    material: 'Cuero genuino negro con texturado',
    description: 'Matera rígida de diseño distinguido en cuero negro con grabado en relieve estilo croco/tejido. Estructura armada con remaches metálicos y división interna que asegura termos grandes de 1L a 1.4L y accesorios materos.',
    highlights: [
      'Cuero curtido negro con diseño labrado',
      'División interior separadora',
      'Remaches metálicos de alta durabilidad',
      'Fácil de limpiar y transportar'
    ],
    badge: 'Exclusivo',
    inStock: true,
    details: {
      'Color': 'Negro profundo con grabado',
      'Estructura': 'Rígida con base reforzada',
      'Capacidad': 'Termo estándar/Stanley + Mate + Yerbero'
    }
  },
  {
    id: 'canasta-matera-caramelo',
    name: 'Canasta Matera Grande de Cuero con División - Caramelo',
    category: 'Línea Mate',
    price: 32000,
    image: '/products/canasta_matera_caramelo.jpg',
    material: 'Cuero vacuno tono caramelo',
    description: 'Canasta matera espaciosa de confección talabartera tradicional en cuero vacuno tono caramelo/suela. Gran profundidad y estabilidad en mesa o pasto, con pespuntes en contraste y costura cruzada.',
    highlights: [
      'Modelo Grande con división acolchada',
      'Color cálido caramelo natural',
      'Asa ancha ergonómica',
      'Acabado aceitado suave al tacto'
    ],
    inStock: true,
    details: {
      'Color': 'Caramelo / Suela natural',
      'Tamaño': 'Grande con tabique central',
      'Costura': 'Pespunte perimetral reforzado'
    }
  },
  {
    id: 'exprimidor-limon',
    name: 'Exprimidor Manual de Limón en Acero Inoxidable',
    category: 'Cocina & Bazar',
    price: 9000,
    image: '/products/exprimidor_limon.jpg',
    material: 'Acero Inoxidable quirúrgico macizo',
    description: 'Exprimidor de limón de palanca doble forjado en acero inoxidable. Su cazoleta semiesférica con orificios microperforados exprime cada gota de jugo sin permitir el paso de semillas ni pulpa indeseada.',
    highlights: [
      '100% Acero inoxidable no corrosivo',
      'Prensado con mínimo esfuerzo',
      'Fácil de lavar, apto lavavajillas',
      'Garantía de durabilidad'
    ],
    badge: 'Económico',
    inStock: true,
    details: {
      'Material': 'Acero Inoxidable pulido',
      'Largo': '21 cm aprox.',
      'Uso': 'Limones, limas y cítricos medianos'
    }
  },
  {
    id: 'pimentero-madera',
    name: 'Pimentero / Salero de Madera Torneada',
    category: 'Cocina & Bazar',
    price: 17000,
    image: '/products/pimentero_madera.jpg',
    material: 'Madera natural maciza torneada',
    description: 'Molinillo clásico artesanal torneado en una sola pieza de madera maciza lustrada. Su mecanismo interno triturador permite moler pimienta negra, blanca, sal gruesa o mezclas de hierbas con ajuste preciso de grosor.',
    highlights: [
      'Madera maciza con acabado satinado',
      'Regulación de molienda en la tuerca superior',
      'Diseño noble que viste la mesa',
      'Altura balanceada de 20 cm'
    ],
    inStock: true,
    details: {
      'Material': 'Madera de haya maciza',
      'Altura': '20 cm',
      'Mecanismo': 'Ajuste de molienda fina a gruesa'
    }
  },
  {
    id: 'pimentero-acrilico',
    name: 'Pimentero y Salero de Acrílico Cristal 2 en 1',
    category: 'Cocina & Bazar',
    price: 15000,
    image: '/products/pimentero_acrilico.jpg',
    material: 'Acrílico cristal transparente de alta resistencia',
    description: 'Molinillo de especias "Pepper & Salt Mill" con cuerpo en acrílico óptico de alta pureza. Permite apreciar la frescura de los granos de pimienta o sales de colores y controlar fácilmente la cantidad restante.',
    highlights: [
      'Transparencia cristal de alto impacto',
      'Mecanismo de molienda con perilla superior',
      'Recarga sencilla desenroscando el tope',
      'Viene en caja individual'
    ],
    inStock: true,
    details: {
      'Material': 'Acrílico cristal + eje de acero',
      'Presentación': 'En caja individual de regalo',
      'Uso': 'Pimienta en grano, sal del Himalaya, especias'
    }
  },
  {
    id: 'jarra-vidrio-1l',
    name: 'Jarra de Vidrio de 1 Litro con Tapa Acrílica',
    category: 'Mesa & Cristalería',
    price: 15000,
    image: '/products/jarra_vidrio.jpg',
    material: 'Vidrio templado grueso transparente',
    description: 'Jarra de diseño europeo marca Glass Jug con 1 litro de capacidad. Fabricada en vidrio templado de gran espesor y transparencia con asa anatómica y tapa de acrílico ajustada para refrigerador o mesa de verano.',
    highlights: [
      'Capacidad de 1.0 Litro',
      'Tapa de acrílico protectora desmontable',
      'Pico vertedor con corte limpio',
      'Caja de presentación original'
    ],
    inStock: true,
    details: {
      'Capacidad': '1.000 ml (1 Litro)',
      'Material': 'Vidrio sódico-cálcico templado + tapa acrílica',
      'Uso': 'Agua, jugos naturales, limonadas y bebidas frías'
    }
  },
  {
    id: 'mini-copas-vidrio-x6',
    name: 'Set de Mini Copas de Cristal Labrado x6 Unidades',
    category: 'Mesa & Cristalería',
    price: 15000,
    image: '/products/mini_copas_vidrio.jpg',
    material: 'Vidrio grueso labrado vintage Yesink',
    description: 'Juego de 6 mini copas de colección estilo tallado vintage marca Yesink Crystal Glass. Textura labrada con relieve geométrico que realza el brillo de las bebidas. Ideales para licores, bajativos, cócteles o degustación.',
    highlights: [
      'Set completo de 6 unidades',
      'Vidrio labrado de excelente peso y cuerpo',
      'Base pie firme y elegante',
      'Presentación en caja original Yesink GB-55'
    ],
    badge: 'Pack x6',
    inStock: true,
    details: {
      'Cantidad': '6 copas por caja',
      'Marca': 'Yesink Crystal Glass',
      'Uso': 'Licores finos, jerez, degustación, postres',
      'Apto': 'Apto para lavavajillas'
    }
  },
  {
    id: 'cubiertos-dorados-25pc',
    name: 'Juego de Cubiertos 25 Piezas con Maletín Dorado de Lujo',
    category: 'Cubertería & Mesa',
    price: 34000,
    video: '/products/cubiertos_25_piezas.mp4',
    material: 'Acero inoxidable con detalles en dorado',
    description: 'Exclusivo set de 25 piezas de cubertería de mesa fabricado en acero inoxidable con detalles decorativos en baño dorado. Incluye 6 cucharas soperas, 6 cuchillos de asado/mesa, 6 tenedores, 6 cucharitas de postre/café y un elegante maletín dorado de transporte y guardado.',
    highlights: [
      '24 cubiertos de mesa + 1 maleta dorada',
      '6 cucharas soperas',
      '6 cuchillos de filo dentado',
      '6 tenedores principales',
      '6 cucharitas de café/postre',
      'Maletín dorado rígido con cerraduras'
    ],
    badge: 'Set Premium',
    inStock: true,
    details: {
      'Contenido': '6 cucharas, 6 cuchillos, 6 tenedores, 6 cucharitas, 1 maleta dorada',
      'Total piezas': '25 piezas',
      'Material': 'Acero inoxidable decorado con oro',
      'Presentación': 'Maletín ejecutivo dorado'
    }
  },
  {
    id: 'calentador-mamadera',
    name: 'Calentador de Mamadera Portátil USB Digital',
    category: 'Cuidado & Hogar',
    price: 19000,
    image: '/products/calentador_mamadera.jpg',
    material: 'Funda de aislamiento multicapa + Velcro envolvente',
    description: 'Calentador térmico de mamaderas inteligente "Rechargeable Warm Milk". Se enrolla y fija mediante velcro elástico sobre cualquier biberón o botella. Incorpora pantalla LED con indicador digital de grados y cable USB para conectar en auto, powerbank o cargador de celular.',
    highlights: [
      'Alimentación universal por puerto USB',
      'Display LED con lectura en tiempo real',
      'Ajuste con velcro universal para cualquier mamadera',
      'Ideal para viajes, paseos y salidas'
    ],
    badge: 'Novedad',
    inStock: true,
    details: {
      'Conexión': 'USB 5V / 2A (cable incluido)',
      'Display': 'LED digital frontal',
      'Compatibilidad': 'Universal para todas las marcas de biberones'
    }
  },
  {
    id: 'irrigador-bucal',
    name: 'Irrigador Bucal Dental Portátil Recargable',
    category: 'Cuidado & Hogar',
    price: 17000,
    image: '/products/irrigador_bucal.jpg',
    material: 'Polímero médico libre de BPA + Boquilla rotativa 360°',
    description: 'Irrigador bucal portátil inalámbrico "Portable Oral Irrigator". Remueve hasta el 99.9% de la placa y restos interdentales donde el cepillo tradicional no llega. Cuenta con depósito de agua transparente, boquilla dirigible 360° y 3 modos de potencia (Soft para encías sensibles, Normal y Pulse para masaje gingival).',
    highlights: [
      '3 Modos: Soft, Normal y Pulse',
      'Depósito transparente con medición de nivel',
      'Batería de larga duración recargable por USB',
      'Cabezal giratorio 360° con bloqueo seguro'
    ],
    inStock: true,
    variants: ['Celeste Glaciar', 'Rosa Pastel'],
    details: {
      'Modos': 'Soft (suave) / Normal (diario) / Pulse (pulsante)',
      'Batería': 'Recargable vía USB (cable incluido)',
      'Resistencia': 'Impermeable IPX7',
      'Colores': 'Rosa pastel y Celeste glaciar'
    }
  }
];

export const CATEGORIES = [
  'Todos',
  'Línea Mate',
  'Cocina & Bazar',
  'Mesa & Cristalería',
  'Cubertería & Mesa',
  'Cuidado & Hogar'
] as const;

export type CategoryFilter = typeof CATEGORIES[number];

// Format price as Chilean / Argentine standard currency: $32.000
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString('es-AR')}`;
}

// Generate prefilled WhatsApp order message
export function generateWhatsAppLink(
  phone: string,
  customer: { name: string; phone: string; address: string; notes?: string; paymentMethod: string },
  items: { product: Product; quantity: number; selectedVariant?: string }[]
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  let message = `*¡Hola Bazar el Pelado! Quiero realizar este pedido:* 🛒\n\n`;
  message += `*Cliente:* ${customer.name}\n`;
  message += `*Teléfono:* ${customer.phone}\n`;
  message += `*Dirección / Entrega:* ${customer.address}\n`;
  message += `*Forma de Pago:* ${customer.paymentMethod}\n`;
  if (customer.notes) {
    message += `*Notas / Aclaraciones:* ${customer.notes}\n`;
  }
  message += `\n*Detalle del Pedido:*\n`;

  items.forEach((item, index) => {
    const variantStr = item.selectedVariant ? ` (${item.selectedVariant})` : '';
    const itemTotal = formatPrice(item.product.price * item.quantity);
    message += `${index + 1}. *${item.product.name}${variantStr}*\n   ${item.quantity} x ${formatPrice(item.product.price)} = ${itemTotal}\n`;
  });

  message += `\n*TOTAL A PAGAR: ${formatPrice(subtotal)}*\n\n`;
  message += `Quedo atento a la confirmación y coordinación. ¡Muchas gracias!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
