import Image from 'next/image';
import Divider from '../Divider';
import { AiFillHeart, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import './home.css';
import { noto } from '@/app/libs/fonts';
import { BiLogoSteam } from 'react-icons/bi';

interface IconLinkProps {
    to: string;
    children: React.ReactNode;
    title: string;
}

const IconLink = (props: IconLinkProps) => (
    <a target="_blank" href={props.to} rel="noopener noreferrer" title={props.title} className='mx-4'>
        {props.children}
    </a>
);

export default function Footer() {
    return (
        <>
            <Divider>
                <div className={`${noto.className} text-3xl flex items-center footer-icons`}>
                    <IconLink to='https://github.com/wangsz12' title='Github'>
                        <AiOutlineGithub size={32} />
                    </IconLink>
                    <IconLink to='mailto://wangsz12@foxmail.com' title='Email'>
                        <AiOutlineMail size={28} />
                    </IconLink>
                    <IconLink to='https://www.xiaohongshu.com/user/profile/62496468000000001000b527' title='小红书'>
                        <Image src='/redbook.svg' height={28} width={28} alt='RED' className='select-none' />
                    </IconLink>
                    <IconLink to='https://steamcommunity.com/id/g-puffy/' title='Steam'>
                        <BiLogoSteam size={32} />
                    </IconLink>
                </div>
            </Divider>
            <div className='w-fit mx-auto mb-10 flex flex-col items-center text-gray-400'>
                <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    className='w-fit text-center hover:text-sub-theme transition-colors ease-linear duration-200'
                >CC BY-NC-SA 4.0</a>
                <span>Copyright © 2024 王盛泽(Simon)</span>
                <span>Built with <AiFillHeart size={16} className='inline text-sub-theme' /> by myself</span>
                <a
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    className='w-fit text-center hover:text-sub-theme transition-colors ease-linear duration-200'
                >湘ICP备2021017316号-1</a>
            </div>
        </>
    );
}   