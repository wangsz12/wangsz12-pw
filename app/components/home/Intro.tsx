import { deYiHei } from '@/app/plugins/fonts';

export default function Intro() {
    return (
        <div className='h-80 flex justify-center items-center'>
            <span className={`${deYiHei.className} text-6xl font-light text-gray-700`}>Web开发 / 摄影 / 游戏</span>
        </div>
    );
}