import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Home | Bookish Store', template: '%s | Bookish Store' },
  description: 'Your classic weeb store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/books">Books</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
