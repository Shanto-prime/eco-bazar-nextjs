import "./global.css";
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


export const metadata = {
    title: "Eco Bazar",
    description: "Eco Bazar Shopery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head><link rel="icon" href="/logo.jpeg" type="image/jpeg" /></Head>
            <body className={` ${poppins.className} antialiased`} > {children} </body>
        </html>
    );
}
