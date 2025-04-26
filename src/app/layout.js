import './globals.css';
import {Inter} from 'next/font/google';


const inter = Inter({subsets: ['latin']});
export const metadata = {
 title: 'Innovista',
 description: 'Book Your Event With Exibi',
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className={inter.className}>{children}</body>
  </html>
 );
}
