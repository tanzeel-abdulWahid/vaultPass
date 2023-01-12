import React from 'react'

const Btns = () => {
    return (
        <div className="text-white flex flex-col md:flex-row gap-9 justify-center md:justify-end px-28 mt-10 ">
            <h2 className="bg-[#F89E1B] md:w-28 md:h-14 rounded-full flex justify-center items-center font-bold">
                Buy PASS
            </h2>
            <h2 className=" md:w-40 md:h-14 rounded-full flex justify-center items-center font-bold border-2 border-[#F89E1B]">
                Connect Wallet
            </h2>
        </div>
    )
}

export default Btns