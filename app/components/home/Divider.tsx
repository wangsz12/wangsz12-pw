import { whisper } from '@/app/libs/fonts';
import './home.css';

interface Props {
    children?: string | React.ReactNode;
    margin?: number;
}

export default function Divider(props: Props) {
    const margin = props.margin ?? 12;

    return (
        <div className={`${whisper.className} divider text-5xl text-sub-theme`} style={{margin: `${margin / 4}rem 0`}}>{props.children}</div>
    );
}