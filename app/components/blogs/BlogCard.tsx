import dayjs from 'dayjs';
import Divider from '../home/Divider';
import Link from 'next/link';
import './blogs.css';
import Tag from './Tag';
import { Tag as TagType } from '@/app/libs/definitions';
import { AiOutlineTags } from 'react-icons/ai';

interface Props {
    id: string;
    title: string;
    desc: string;
    date: Date;
    tags?: TagType[];
}

export default function BlogItem(props: Props) {
    const djsObj = dayjs(props.date);
    const url = `${props.id}`;

    return (
        <div className="h-72 mx-36 my-16 bg-gray-50 rounded-lg flex">
            <div className="h-full w-72 min-w-72 flex justify-center items-center flex-col">
                <span className='blog-item-day text-gray-600 text-5xl font-bold mb-4'>{djsObj.date()}</span>
                <span className='text-gray-600 text-lg'>{`${djsObj.year()}年${djsObj.month() + 1}月`}</span>
            </div>
            <div className='h-full p-8 pl-0 overflow-hidden flex flex-col'>
                <span className='text-2xl font-bold block overflow-hidden text-ellipsis whitespace-nowrap' title={props.title}>
                    {props.title}
                </span>
                <Divider margin={4} />
                <p className='text-gray-500 break-all line-clamp-4'>{props.desc}</p>
                <div className='flex items-center flex-1'>
                    <div className='flex items-center'>
                        <AiOutlineTags size={28} className='mr-2 text-gray-600' />
                        {props.tags?.map(({id, name}) => <Tag key={id} id={id}>{name}</Tag>)}
                    </div>
                    <Link href={url} className='h-10 w-32 bg-sub-theme rounded-md ml-auto'>
                        <button className="w-full h-full text-center text-white font-bold">阅读全文</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}