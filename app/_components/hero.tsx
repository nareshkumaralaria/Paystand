import Image from "next/image"

export const Hero = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 relative">
                {/* backgrounds */}
                <div className="absolute hidden sm:block top-0 left-0 w-full h-full bg-[url('/bg-logo.svg')] bg-top bg-no-repeat select-none -z-10"></div>
                <div className="absolute hidden md:block bottom-0 right-0 w-full h-full bg-[url('/bg-lines.svg')] bg-bottom bg-no-repeat select-none -z-10"></div>
                <div className="absolute hidden md:block bottom-40 left-0 w-full h-full bg-[url('/bg-stars.svg')] bg-left bg-no-repeat select-none -z-10"></div>
                <div className="absolute hidden md:block bottom-20 left-0 w-full h-full bg-[url('/bg-stars.svg')] bg-left bg-no-repeat select-none -z-10"></div>
                <div className="absolute hidden md:block bottom-0 right-0 w-full h-full bg-[url('/bg-stars.svg')] bg-right bg-no-repeat select-none -z-10"></div>
                <div className="absolute hidden md:block bottom-20 right-0 w-full h-full bg-[url('/bg-stars.svg')] bg-right bg-no-repeat select-none -z-10"></div>
                <div className="absolute top-0 left-0 blur-[150px] select-none w-44 h-44 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>
                <div className="absolute bottom-20 right-0 blur-[150px] select-none w-44 h-44 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center w-full pt-12 sm:pt-16 md:pt-20 gap-1 sm:gap-2 md:gap-4">
                    <div className="mx-auto flex h-fit w-fit items-center justify-center">
                        <div className="h-fit w-fit bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] p-[1px] rounded-full">
                            <div className="flex h-full w-full items-center justify-center bg-[#000710] rounded-full back">
                                <p className="text-[8px] sm:text-xs py-1 sm:py-2 px-4 mb-0 font-normal">B2B PAYMENTS PLATFORM, SYSTEM, AND SOFTWARE</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[26px] sm:text-5xl md:text-6xl font-bold text-center pt-3">
                        Business&nbsp;<span className="bg-gradient-to-r from-[#FE6B2E] to-[#FE472E] text-transparent bg-clip-text">-To-</span>&nbsp;Business
                    </p>
                    <p className="text-xl sm:text-4xl md:text-5xl font-semibold text-center text-[#000710] custom-text">
                        Payments Revolutionized
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-center font-normal pt-3 text-[#BCBCBC]">
                        Transforms Your Future Revenue Streams Into
                        <br />Up-Front Capital For Growth - Without Dilution The Digital Era.
                    </p>
                    <button className='text-sm font-semibold bg-gradient-to-r from-[#FE6B2E] to-[#FE472E] rounded-lg px-4 sm:px-5 py-2 hover:from-[#FE472E] hover:to-[#FE6B2E] transition-all mt-4'>
                        Get Started
                    </button>
                </div>

                {/* hero image */}
                <div className="py-10 sm:py-16 md:py-20 flex justify-center items-center w-full h-fit z-20">
                    <img src="/hero.png" alt="hero" className="w-[95%] sm:w-[85%] md:w-[60%] pt-0 md:pt-6 select-none" />
                </div>
            </div>
        </div>
    )
}