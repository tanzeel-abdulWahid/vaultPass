import React,{useState} from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import {HiOutlineClipboardDocument} from 'react-icons/hi2'
import { AiOutlineLineChart, AiFillTwitterCircle } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import {DiGoogleAnalytics} from 'react-icons/di'
import {BsArrowUpRightCircle,BsTwitter} from 'react-icons/bs'
import {FaDiscord, FaTelegramPlane} from 'react-icons/fa'

import logo from '../assets/logo.png'
const Sidebar = () => {
    const menus = [
        { name: "Dashboard",icon: MdOutlineDashboard },
        { name: "Analytics",icon: DiGoogleAnalytics },
        { name: "Stake",icon: FiMessageSquare },
        { name: "Bond",icon: RiSettings4Line, margin:true},
        { name: "Buy Pass",icon: BsArrowUpRightCircle },
        { name: "Price Chart",icon: AiOutlineLineChart },
        { name: "Documentation", icon: HiOutlineClipboardDocument},
    ];

    const bondDiscounts = [
        {name:'XIV-BNB LP', price:'-16.28%'},
        {name:'PASS-BNB LP', price:'-16.28%'},
        {name:'XIV', price:'-16.28%'},
        {name:'BNB', price:'-16.28%'},
        {name:'BUSD', price:'-16.28%'},

    ]

    const [open, setOpen] = useState(true)
    return (
        <aside className={` bg-[#161623] ${open? 'w-72' : 'w-16'} min-h-screen p-5 text-white duration-500 border-r-2 border-gray-500 h-full hidden md:block`}>
            {/* <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
            </div> */}
            <div className='mt-4'>
                <img className='h-10' src={logo} alt="logo" />
            </div>
            <div className='mt-14 flex flex-col gap-4 relative'>
                {menus.map((menu,i) => (
                    <>
                        <div key={i} className="flex items-center text-sm gap-3.5 font-medium p-1 ">
                            <div>{React.createElement(menu?.icon, {size:'20'})}</div>
                            <h2 className={`whitespace-pre ${!open && 'opacity-0 overflow-hidden'}`}>{menu?.name}</h2>
                        </div>
                            {menu?.margin && (
                                <div className='ml-10'>
                                    <p className='font-semibold text-sm text-[#6A6971] pb-2'>Bond Discounts</p>
                                    {bondDiscounts.map((disc) => (
                                        <div className='flex justify-between text-sm font-medium p-2'>
                                            <h2>{disc.name}</h2>
                                            <h2>{disc.price}</h2>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </>

                    
))}
                    <div className='flex justify-around w-5/6 mt-2'>
                        <BsTwitter />
                        <FaDiscord />
                        <FaTelegramPlane />
                    </div>

                

            </div>
        </aside>

    );
};

export default Sidebar;





