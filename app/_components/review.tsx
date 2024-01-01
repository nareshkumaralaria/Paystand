import Image from "next/image"

export const Review = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 md:px-4 py-10 md:py-16">
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-start justify-start w-full md:w-3/4 p-3 sm:p-6 gap-3 sm:gap-6 rounded-md border-[10px] border-[#FFFFFF]/20 backdrop-blur-md relative">
                        <div className="absolute top-[-9px] left-[-9px] w-[10px] h-[10px] bg-gradient-to-t from-[#FE6B2E] to-[#FE472E] rounded-full"></div>
                        <div className="absolute top-[-9px] right-[-9px] w-[10px] h-[10px] bg-gradient-to-t from-[#FE6B2E] to-[#FE472E] rounded-full"></div>
                        <div className="absolute bottom-[-9px] left-[-9px] w-[10px] h-[10px] bg-gradient-to-t from-[#FE6B2E] to-[#FE472E] rounded-full"></div>
                        <div className="absolute bottom-[-9px] right-[-9px] w-[10px] h-[10px] bg-gradient-to-t from-[#FE6B2E] to-[#FE472E] rounded-full"></div>

                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-left w-full">
                            &quot;The Paystand platform has done exactly what we expected it to do. We&apos;re thrilled that the results aligned with our expectations. We&apos;re operating as a well-oiled machine.&quot;
                        </p>
                        <div className="flex items-center justify-start gap-2">
                            <Image src="/men.svg" alt="Reviewer 1" width={48} height={48} className="w-12 h-12" />
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-base font-semibold">AJ Hefferan</p>
                                <p className="text-xs text-[#BCBCBC] text-left font-normal">Director of Finance & Operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}