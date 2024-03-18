import './home.css';
import NavBar from './components/navbar/NavBar';
import { Metadata } from 'next';
import Intro from './components/home/Intro';
import Divider from './components/home/Divider';
import Waterfall from './components/home/Waterfall';
import BlogCard from './components/blogs/BlogCard';
import { getRandomString } from './libs/utils';
import ViewMore from './components/home/ViewMore';
import Footer from './components/home/Footer';

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

    const mockBlogData = Array(3).fill(null).map((_, idx) => ({
        id: String(idx),
        title: getRandomString(100),
        desc: getRandomString(500),
        date: new Date(),
        tags: new Array(3).fill(null).map((_, idx) => ({
            id: String(idx),
            name: getRandomString(5)
        }))
    }));

    return (
        <>
            <NavBar />
            <Intro />
            <Divider>Gallery</Divider>
            <Waterfall>
                {mockImageData}
            </Waterfall>
            <Divider>Blogs</Divider>
            { mockBlogData.map(({id, title, desc, date, tags}, idx) => (
                <BlogCard
                    key={idx}
                    id={id}
                    title={title}
                    desc={desc}
                    date={date}
                    tags={tags}
                />
            ))}
            <ViewMore to='/blogs' />
            <Footer />
        </>
    );
}