import Link from 'next/link';
import './home.css';

interface Props {
    to: string;
}

export default function ViewMore(props: Props) {
    return (
        <Link className="h-16 w-80 border-solid border-2 border-gray-600 view-more" href={props.to}>
            <button className="h-full w-full text-gray-600 text-lg tracking-widest">
                查看更多
            </button>
        </Link>
    );
}