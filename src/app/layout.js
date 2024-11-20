import "./global.css";
import { Poppins } from 'next/font/google';

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
            <body className={` ${poppins.className} antialiased`} > {children} </body>
        </html>
    );
}
