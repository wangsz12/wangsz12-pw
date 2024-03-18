import Link from 'next/link';

interface Props {
    id: string;
    children: string;
}

export default function Tag(props: Props) {
    const url = `${props.id}`;

    return (
        <Link
            href={url}
            className='mx-2 px-2 py-1 text-white bg-sub-theme rounded'
        >
            {props.children}
        </Link>
    );
}