import './home.css';
import NavBar from './components/home/NavBar';
import { Metadata } from 'next';
import Intro from './components/home/Intro';
import Divider from './components/home/Divider';
import Image from 'next/image';
import Waterfall from './components/home/Waterfall';

export const metadata: Metadata = {
    title: '首页 - wangsz12',
};

export default function Home() {
    const mockImageData = [
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/1.jpg',
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/2.jpg',
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/3.jpg',
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/4.jpg',
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/5.jpg',
        'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/6.jpg',
    // 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/7.jpg',
    // 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/8.jpg',
    ];

    return (
        <>
            <NavBar />
            <Intro />
            <Divider>Gallery</Divider>
            <Waterfall>
                {mockImageData}
            </Waterfall>
            <Divider>Blogs</Divider>
            {/* <Divider /> */}
        </>
    );
}