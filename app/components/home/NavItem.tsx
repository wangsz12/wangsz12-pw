import Link from 'next/link';
import './home.css';

interface Props {
    children: string;
    to: string;
}

export default function NavItem(props: Props) {
    return (
        <div className='mx-10 flex justify-center'>
            <Link
                className='text-gray-600 text-xl tracking-widest item'
                href={props.to}
            >{props.children}</Link>
        </div>
    );
}