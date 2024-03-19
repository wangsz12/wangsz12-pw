import '@/app/globals.css';
import { noto } from '../../libs/fonts';
import NavBar from '../../components/navbar/NavBar';
import Footer from '@/app/components/home/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hans">
            <body className={`${noto.className} bg-main-theme`}>
                <NavBar />
                <div className='px-36'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
