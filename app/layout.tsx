import './globals.css';
import { noto } from './libs/fonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hans">
            <body className={`${noto.className} home-bg px-36`}>
                {children}
            </body>
        </html>
    );
}
