import Image from 'next/image';
import NavItem from './NavItem';

interface Props {}

export default function NavBar(props: Props) {
    return (
        <nav className="w-full h-28 flex justify-center items-center px-10">
            <NavItem to='/about'>关于</NavItem>
            <NavItem to='/gallery'>摄影</NavItem>
            <Image className='mx-10' src='/signature.svg' height={90 * 90 / 232} width={90} alt='Simon' />
            <NavItem to='/blogs'>文章</NavItem>
            <NavItem to='/contact'>联系</NavItem>
        </nav>
    );
}