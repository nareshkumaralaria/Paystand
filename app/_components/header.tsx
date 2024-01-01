import { Kanit } from 'next/font/google';
import Image from 'next/image';

const kanit = Kanit({
    style: 'normal',
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
});

export const Header = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit border-b border-b-[#424A55] bg-transparent">
            <div className="flex items-center justify-between w-full max-w-screen-2xl px-2 h-12 md:h-16">
                <div className="flex items-center gap-2">
                    <Image
                        src="logo.svg"
                        alt="Paystand"
                        width={24}
                        height={24}
                        className='h-5 w-5 md:w-6 md:h-6'
                    />
                    <p className={`${kanit.className} text-lg md:text-2xl font-semibold`}>Paystand</p>
                </div>
                <div className="hidden items-center gap-10 md:flex">
                    <p className='text-sm font-bold cursor-pointer bg-gradient-to-r from-[#FE6B2E] to-[#FE472E] text-transparent bg-clip-text relative'>
                        Why Paystand
                        <img
                            src="active-line.svg"
                            alt="Paystand"
                            className="absolute left-0 -bottom-3 w-full"
                        />
                    </p>
                    <p className='text-sm font-semibold text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Solutions</p>
                    <p className='text-sm font-semibold text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>integrations</p>
                    <p className='text-sm font-semibold text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Resources</p>
                    <p className='text-sm font-semibold text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Company</p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                    <button className='text-sm font-semibold bg-gradient-to-r from-[#FE6B2E] to-[#FE472E] rounded-lg px-5 py-2 hover:from-[#FE472E] hover:to-[#FE6B2E] transition-all'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}