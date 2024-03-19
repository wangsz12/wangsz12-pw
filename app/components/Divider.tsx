import { whisper } from '@/app/libs/fonts';
import './components.css';

type TextSize = 'small' | 'middle' | 'large';

interface Props {
    children?: string | React.ReactNode;
    margin?: number;
    textSize?: TextSize;
}

const textSizeMap = {
    'small': 'text-3xl',
    'middle': 'text-4xl',
    'large': 'text-5xl'
};

export default function Divider(props: Props) {
    const margin = props.margin ?? 12;
    const textSize = textSizeMap[props.textSize ?? 'large'];

    return (
        <div className={`${whisper.className} ${textSize} divider text-sub-theme`} style={{margin: `${margin / 4}rem 0`}}>{props.children}</div>
    );
}