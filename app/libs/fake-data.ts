import { getRandomString } from './utils';

export const fakeHomeGalleryImages = [
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/1.jpg',
        height: 3375,
        width: 6000
    },
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/2.jpg',
        height: 3313,
        width: 5888
    },
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/3.jpg',
        height: 3917,
        width: 5223
    },
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/4.jpg',
        height: 2966,
        width: 3955
    },
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/5.jpg',
        height: 5269,
        width: 3952
    },
    {
        url: 'https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/6.jpg',
        height: 5333,
        width: 4000
    },
];


export const fakeBlogData = Array(3).fill(null).map((_, idx) => ({
    id: String(idx),
    title: getRandomString(100),
    desc: getRandomString(500),
    date: new Date(),
    tags: new Array(3).fill(null).map((_, idx) => ({
        id: String(idx),
        name: getRandomString(5)
    }))
}));