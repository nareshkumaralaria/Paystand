import { CONTROLS_1, CONTROLS_2 } from "@/constants/data"
import Image from "next/image"

export const Control = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 md:px-4 py-10 md:py-16 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px] select-none w-96 h-96 rounded-full bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 w-full">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-left w-full md:w-1/2">
                        Control And Automate Every Aspect Of The Payment Process
                    </p>
                    <p className="text-xs md:text-sm text-left text-[#BCBCBC] w-full md:w-1/2">
                        Flexible payment technology combines enterprise grade capabilities with a consumer grade experience
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between w-full mt-8 md:mt-20">
                    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 w-full md:w-1/3 order-1">
                        {
                            CONTROLS_1.map((item, index) => (
                                <div key={index} className={`flex items-center justify-start w-full md:w-fit h-fit rounded-lg p-3 md:p-5 bg-gradient-to-r from-[#FFFFFF]/10 to-transparent backdrop-blur-xl ${index === 0 ? 'ml-0 md:ml-14' : ''} ${index === 2 ? 'ml-0 md:ml-14' : ''}`}>
                                    <div className="flex items-center justify-center min-w-12 min-h-12 md:min-w-16 md:min-h-16 rounded-[50%] bg-[#FFFFFF]/20 backdrop-blur-md">
                                        <Image src={item.imgSrc} alt={item.title} width={40} height={40} className="w-7 h-7 md:w-10 md:h-10" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start ml-3">
                                        <p className="text-base font-semibold">{item.title}</p>
                                        <p className="text-xs text-[#BCBCBC] text-left font-normal">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center w-full md:w-1/3 bg-[url('/circle.svg')] bg-no-repeat bg-center h-60 md:h-80 order-3 md:order-2">
                        <p className="text-base sm:text-lg md:text-2xl font-bold text-center w-full">
                            95%
                        </p>
                        <span className="text-xs text-center text-[#BCBCBC] w-full">
                            Happy Customers
                        </span>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 w-full md:w-1/3 order-2 md:order-3">
                        {
                            CONTROLS_2.map((item, index) => (
                                <div key={index} className={`flex items-center justify-start w-full md:w-fit h-fit rounded-lg p-3 md:p-5 bg-gradient-to-r from-[#FFFFFF]/10 to-transparent backdrop-blur-xl ${index === 1 ? 'ml-0 md:ml-14' : ''}`}>
                                    <div className="flex items-center justify-center min-w-12 min-h-12 md:min-w-16 md:min-h-16 rounded-[50%] bg-[#FFFFFF]/20 backdrop-blur-md">
                                        <Image src={item.imgSrc} alt={item.title} width={40} height={40} className="w-7 h-7 md:w-10 md:h-10" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start ml-3">
                                        <p className="text-base font-semibold">{item.title}</p>
                                        <p className="text-xs text-[#BCBCBC] text-left font-normal">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}