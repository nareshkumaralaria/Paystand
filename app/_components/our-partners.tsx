import Image from "next/image"

export const OurPartners = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col items-start justify-start w-full max-w-screen-2xl px-2 py-10 md:py-16 relative">
                {/* backgrounds */}
                <div className="absolute top-1/2 left-0 blur-[150px] select-none w-44 h-44 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>
                <div className="absolute top-1/2 hidden md:block left-1/2 right-1/2 -translate-x-1/2 blur-[150px] select-none w-44 h-44 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>
                <div className="absolute hidden sm:block top-1/2 right-0 blur-[150px] select-none w-44 h-44 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] -z-10"></div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center w-full gap-1 sm:gap-2 md:gap-4">
                    <div className="flex flex-col items-center justify-center w-fit">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-1 md:pt-3">
                            Our Partners
                        </h1>
                        <p className="text-xs md:text-sm text-center font-normal pt-1 md:pt-3 text-[#BCBCBC]">
                            Serving B2B Customers At The Heart Of The Global Economy
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-16 md:gap-20 items-center justify-center w-full pt-10 md:pt-16 pb-6 md:pb-8">
                        <Image width={96} height={96} src="/razorpay.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/fivetran.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/doordash.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/segment.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/invision.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/coinbase.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/trello.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/canva.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/docker.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/descript.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                        <Image width={96} height={96} src="/zapier.svg" alt="" className="w-24 sm:w-28 md:w-32"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}