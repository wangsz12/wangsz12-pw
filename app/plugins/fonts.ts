import { Noto_Sans_SC, Whisper } from 'next/font/google';
import localFont from 'next/font/local';

const noto = Noto_Sans_SC({
    weight: ['400', '700'],
    subsets: ['latin']
});

const deYiHei = localFont({
    src: '../../public/SmileySans-Oblique.ttf.woff2'
});

const whisper = Whisper({
    weight: '400',
    subsets: ['latin']
});

export { noto, deYiHei, whisper };