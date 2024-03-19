import Divider from '@/app/components/Divider';
import Timeline from '@/app/components/about/Timeline';
import dayjs from 'dayjs';
import Image from 'next/image';

const timeline = [{
    from: dayjs(new Date(2016, 8)),
    to: dayjs(new Date(2019, 5)),
    school: '山东省实验中学',
    location: '山东，济南',
    degree: '高中',
},
{
    from: dayjs(new Date(2019, 8)),
    to: dayjs(new Date(2023, 5)),
    school: '中南大学',
    location: '湖南，长沙',
    major: '智能科学与技术',
    degree: '本科',
},
{
    from: dayjs(new Date(2023, 8)),
    school: '香港科技大学',
    location: '香港，清水湾',
    major: '大数据技术 (Big Data Technology)',
    degree: '硕士',
}];

export default function About() {

    return (
        <>
            <Divider textSize='small' margin={20}>我的信息</Divider>
            <div className="w-full flex px-20">
                <div className="flex flex-1 justify-center items-center flex-col">
                    
                </div>
                <Image
                    src='https://aaronsblog.oss-cn-shanghai.aliyuncs.com/image/%E5%8F%8C%E5%A1%94%E6%89%AB%E8%A1%97/5.jpg'
                    height={700}
                    width={395 * 700 / 527}
                    alt='Photo of me'
                />
            </div>
            <Divider textSize='small'>足迹</Divider>
            <Timeline timeline={timeline} />
        </>
    );
}