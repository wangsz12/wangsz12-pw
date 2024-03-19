import { Dayjs } from 'dayjs';

export type Tag = {
    id: string;
    name: string;
}

export type TimelineItem = {
    from: Dayjs;
    to?: Dayjs;
    school: string;
    location: string;
    major?: string;
    degree: string;
}

export type GalleryImage = {
    url: string;
    height: number;
    width: number;
}