'use client'
import "./global.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
            </head>
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
