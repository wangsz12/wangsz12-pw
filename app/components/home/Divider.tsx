import { whisper } from '@/app/plugins/fonts';
import './home.css';

interface Props {
    children?: string | React.ReactNode;
}

export default function Divider(props: Props) {
    return (
        <div className={`${whisper.className} divider text-5xl my-12 text-sub-theme`}>{props.children}</div>
    );
}