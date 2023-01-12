import React from 'react'

const MarketDetails = ({name, price}) => {
    return (
        <div className="text-white border-2 border-gray-500 rounded-lg w-[90%] m-auto md:w-[48%] h-24 flex justify-center items-center flex-col">
            <h3>{name}</h3>
            <h1 className="font-bold text-[25px]">{price}</h1>
        </div>
    )
}

export default MarketDetails