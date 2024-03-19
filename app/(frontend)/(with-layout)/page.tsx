import { Metadata } from 'next';
import Intro from '../../components/home/Intro';
import Divider from '../../components/Divider';
import HomeGallery from '../../components/home/HomeGallery';
import BlogCard from '../../components/blogs/BlogCard';
import ViewMore from '../../components/home/ViewMore';
import { fakeBlogData, fakeHomeGalleryImages } from '@/app/libs/fake-data';

export const metadata: Metadata = {
    title: '首页 - wangsz12',
};

export default function Home() {

    return (
        <>
            <Intro />
            <Divider>Gallery</Divider>
            <HomeGallery>
                {fakeHomeGalleryImages}
            </HomeGallery>
            <ViewMore to='/gallery' />
            <Divider>Blogs</Divider>
            { fakeBlogData.map(({id, title, desc, date, tags}, idx) => (
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
        </>
    );
}