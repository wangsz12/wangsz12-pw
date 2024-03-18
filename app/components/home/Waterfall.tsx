import Image from 'next/image';
import ViewMore from './ViewMore';

interface Props {
    children: string[];
}

export default function Waterfall(props: Props) {
    return (
        <>
            <div className="w-full pb-12 flex items-center flex-col">
                <ul className='columns-2'>
                    {props.children.map((url, idx) => (
                        <li key={idx} className='relative h-auto w-full px-10 pb-16 pt-10'>
                            <Image
                                src={url}
                                alt="Photo"
                                height={0}
                                width={0}
                                sizes='100vw'
                                className='w-full h-auto transition-all'
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <ViewMore to='/gallery' />
        </>
    );
}