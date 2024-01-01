import Image from "next/image"

export const Automate = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 md:px-4 py-10 md:py-16">
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-y-12 gap-x-0 md:gap-x-10">
                    <div className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left pt-1 md:pt-3">
                            Automate Your Entire<br />
                            <span className="bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] text-transparent bg-clip-text">Cash Cycle</span>
                        </h2>
                        <p className="text-xs md:text-sm text-left font-normal pt-1 md:pt-3 text-[#BCBCBC]">
                            B2B payments are more than just transactions. With Paystand, you can finally digitize your receivables and move your manual financial processes to the cloud.
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2">
                        <ul className="flex flex-col justify-start items-start gap-4 w-full list-image-none">
                            <li className="flex items-center justify-center gap-2">
                                <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                                <p className="text-xs md:text-sm text-left font-normal">
                                    Speed Up Time-To-Cash And Decrease DSO By 60% Or More
                                </p>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                                <p className="text-xs md:text-sm text-left font-normal">
                                    Reduce Fraud And Chargebacks With Real-Time Fund Verification
                                </p>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                                <p className="text-xs md:text-sm text-left font-normal">
                                    Improve Customer Experience With Seamless, Easy B2B Payment Options
                                </p>
                            </li>
                        </ul>
                        <p className="text-xs md:text-sm text-left font-normal pt-1 md:pt-3 text-[#BCBCBC]">
                            This Is B2B Payments Re-Imagined For Today’s Digital Landscape.
                        </p>
                        <button className='text-sm font-semibold border md:border-2 border-[#FE6B2E] text-[#FE6B2E] bg-transparent rounded-lg px-4 sm:px-5 py-2 hover:border-[#FE472E] hover:text-[#FE472E] transition-all mt-4'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full pt-10 md:pt-16 pb-8 relative">
                    <img src="/automate.png" alt="automate" className="w-full select-none" />
                    <div className="w-[95%] h-[80%] bg-[#F11ED2] blur-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
                    <Image src="/play-button.svg" alt="play button" width={48} height={48} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none w-12 h-12 md:w-28 md:h-28 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}