import './globals.css'

export const metadata = {
  title: 'Qarant.az - Təhlükəsiz Alqı-Satqı Platforması',
  description: 'Azərbaycanda escrow (zəmanətli) pul köçürmə sistemi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className="bg-gray-50 text-slate-900 antialiased">{children}</body>
    </html>
  )
}
