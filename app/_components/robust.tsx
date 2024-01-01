import Image from "next/image"

export const Robust = () => {
    return (
        <div className="flex items-center justify-center w-full px-2 py-0 md:p-2 h-fit bg-transparent">
            <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6 w-full max-w-screen-2xl px-2 md:px-4 py-10 md:py-16">
                <div className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left pt-1 md:pt-3">
                        Robust Integration<br />For Every&nbsp;
                        <span className="bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] text-transparent bg-clip-text">ERP</span>
                    </h2>
                    <p className="text-xs md:text-sm text-left font-normal pt-1 md:pt-3 text-[#BCBCBC]">
                        your transaction data shouldn&apos;t be siloed. Integrate your B2B payments with your critical business tools: ERP, eCommerce, CRM, and accounting systems.
                    </p>
                    <ul className="flex flex-col justify-start items-start gap-4 w-full list-image-none pt-6 md:pt-8">
                        <li className="flex items-center justify-center gap-2">
                            <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                            <p className="text-xs md:text-sm text-left font-normal">
                                Send Invoices With Embedded Payment Links
                            </p>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                            <p className="text-xs md:text-sm text-left font-normal">
                                Use Smart Data To Attach Key Invoice Information To Every Payment
                            </p>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <Image src="/list-style.svg" alt="list-style" width={16} height={16} className="w-4 h-4 select-none" />
                            <p className="text-xs md:text-sm text-left font-normal">
                                Auto-Reconcile Transactions Directly In Your System Of Record
                            </p>
                        </li>
                    </ul>
                    <p className="text-xs md:text-sm text-left font-normal pt-3 text-[#BCBCBC]">
                        Streamline Your Entire Financial Process With End-To-End Payment Functionality, All In One Place.
                    </p>
                    <button className='text-sm font-semibold border md:border-2 border-[#FE6B2E] text-[#FE6B2E] bg-transparent rounded-lg px-4 sm:px-5 py-2 hover:border-[#FE472E] hover:text-[#FE472E] transition-all mt-4'>
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 relative pt-8 md:pt-0">
                    <img src="/robust.png" alt="" className="w-full md:w-[75%] select-none" />
                    <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#F41ED2] to-[#1E5AF4] blur-3xl absolute left-0 md:left-20 top-1/2 -translate-y-1/2 -z-10 opacity-40"></div>
                </div>
            </div>
        </div>
    )
}