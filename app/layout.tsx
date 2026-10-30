import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bazar el Pelado',
  description:
    'Tienda online de Bazar el Pelado. Artículos de bazar, cocina, cristalería, set materos artesanales y novedades para el hogar con pedidos directos por WhatsApp.',
  openGraph: {
    title: 'Bazar el Pelado',
    description:
      'Tienda online de Bazar el Pelado. Artículos de bazar, cocina, cristalería, set materos artesanales y novedades para el hogar con pedidos directos por WhatsApp.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] text-stone-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
