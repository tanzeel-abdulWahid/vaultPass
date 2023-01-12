import React from "react";
import Btns from "./Btns";
import MarketDetails from "./MarketDetails";

const HomePage = () => {
    return (
        <div className="flex flex-col w-full md:w-[80%]">
            <Btns />

            <div className="flex flex-col justify-center items-center mt-8">
                <div>
                    <h2 className="text-[#F89E1B] font-bold text-2xl">EPOCH STAKING</h2>
                </div>

                <div className="flex justify-between w-full md:w-1/2  flex-wrap gap-4 mt-8 backdrop-blur-sm">

                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>
                    <MarketDetails name={"Pass Price"} price={"1520.33$"}/>


                </div>
            </div>
        </div>
    );
};

export default HomePage;
