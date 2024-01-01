import { Kanit } from 'next/font/google';
import Image from 'next/image';

const kanit = Kanit({
    style: 'normal',
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
});

export const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-[#08090D]">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 md:px-4 py-10 md:py-16">
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6 pb-8 md:pb-20 border-b-2 border-b-[#424A55]">
                    <div className="flex flex-col items-start justify-start gap-2 md:gap-3 w-full md:w-1/2">
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
                        <p className="text-xs sm:text-sm md:text-base text-left text-[#424A55] w-full">
                            Paystand is on a mission to create a more open financial system, starting with B2B payments. Using blockchain and cloud technology, we pioneered Payments-as-a- Service to digitize and automate your entire cash lifecycle. Our software makes it possible to digitize receivables, automate processing, reduce time-to-cash, eliminate transaction fees, and enable new revenue.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start justify-evenly gap-y-5 gap-3 w-full md:w-1/2">
                        <div className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                            <p className='text-sm md:text-base font-bold'>
                                ABOUT
                            </p>
                            <ul className="flex md:flex-col flex-wrap items-start justify-start gap-x-6 gap-y-2 md:gap-3">
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Home Page</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>About Us</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Events</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Contact Us</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                            <p className='text-sm md:text-base font-bold'>
                                REFERENCE PAGE
                            </p>
                            <ul className="flex md:flex-col flex-wrap items-start justify-start gap-x-6 gap-y-2 md:gap-3">
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Style Guide</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Instructions</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Licensing</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Changelog</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Style Guide</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                            <p className='text-sm md:text-base font-bold'>
                                PAGES
                            </p>
                            <ul className="flex md:flex-col flex-wrap items-start justify-start gap-x-6 gap-y-2 md:gap-3">
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Home Page</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>About Us</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Events</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Contact Us</li>
                                <li className='text-xs sm:text-sm md:text-base text-[#424A55] cursor-pointer hover:text-[#f1f1f1] transition-colors'>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-6 pt-8'>
                    <p className='text-xs sm:text-sm md:text-base text-[#424A55]'>
                        © 2023 Paystand, Inc. All rights reserved.
                    </p>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='flex items-center justify-center p-2 border border-[#424A55] rounded-full select-none hover:border-[#fff] transition-colors cursor-pointer'>
                            <Image
                                src="facebook.svg"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className='h-5 w-5'
                            />
                        </div>
                        <div className='flex items-center justify-center p-2 border border-[#424A55] rounded-full select-none hover:border-[#fff] transition-colors cursor-pointer'>
                            <Image
                                src="instagram.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className='h-5 w-5'
                            />
                        </div>
                        <div className='flex items-center justify-center p-2 border border-[#424A55] rounded-full select-none hover:border-[#fff] transition-colors cursor-pointer'>
                            <Image
                                src="twitter.svg"
                                alt="Twitter"
                                width={20}
                                height={20}
                                className='h-5 w-5'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}