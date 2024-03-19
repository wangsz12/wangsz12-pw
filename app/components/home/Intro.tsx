import { deYiHei } from '@/app/libs/fonts';

export default function Intro() {
    return (
        <div className='h-96 flex flex-col justify-center items-center'>
            <span className={`${deYiHei.className} text-6xl text-gray-800 mb-10`}>Hi, 这里是Simon</span>
            <span className={'text-3xl text-gray-500'}>Web开发 / 摄影 / 游戏</span>
        </div>
    );
}