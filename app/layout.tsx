import './globals.css';
import { noto } from './plugins/fonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hans">
            <body className={noto.className}>
                <div className='home-bg'>
                    <div className='px-44'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
