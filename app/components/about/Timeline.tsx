import { TimelineItem as TimelineItemType } from '@/app/libs/definitions';
import './timeline.css';

interface Props {
    timeline: TimelineItemType[];
}

interface TimelineItemProps extends TimelineItemType {
    className?: string;
}

const TimelineItem = (props: TimelineItemProps) => (
    <div className={`${props.className} text-lg`}>
        <p className='font-bold'>{props.school} {props.degree}</p>
        <p>{props.from.format('YYYY.MM')} - {props.to ? props.to.format('YYYY.MM') : '现在'}</p>
        <p>{props.major}</p>
        <p>{props.location}</p>
    </div>
);

export default function Timeline(props: Props) {
    const itemClassMap: Record<number, string> = {
        0: 'left-1/2 after:left-0 after:-ml-[10px]',
        1: 'left-0 text-right after:right-0 after:-mr-[10px]'
    };

    return (
        <div className='timeline relative w-full my-0 mx-auto'>
            {props.timeline.map(({from, to, school, location, major, degree}, idx) => (
                <TimelineItem
                    key={school}
                    className={`${itemClassMap[idx % 2]} timeline-item relative w-1/2 px-10 py-4`}
                    from={from}
                    to={to}
                    school={school}
                    location={location}
                    major={major}
                    degree={degree}
                />
            ))}
        </div>
    );
}