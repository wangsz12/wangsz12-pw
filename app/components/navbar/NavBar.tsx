import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';

interface Props {}

interface NavItemProps {
    children: string;
    to: string;
}

const NavItem = (props: NavItemProps) => (
    <div className='mx-10 flex justify-center'>
        <Link
            className='text-gray-800 text-xl tracking-widest item'
            href={props.to}
        >{props.children}</Link>
    </div>
);

export default function NavBar(props: Props) {
    return (
        <nav className="w-full h-28 flex justify-center items-center px-10">
            <NavItem to='/about'>关于</NavItem>
            <NavItem to='/gallery'>摄影</NavItem>
            <Link href='/'>
                <Image className='mx-10 h-auto w-24' src='/signature.svg' height={0} width={0} alt='Simon' />
            </Link>
            <NavItem to='/blogs'>文章</NavItem>
            <NavItem to='/contact'>联系</NavItem>
        </nav>
    );
}