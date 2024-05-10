import React  from "react";

const Sidepannel=()=>{
    return(
        <>
            <div className="text-gray-200 shadow-md p-3 lg:p-5 rounded-md shadow-red-100 bg-[#2D2D2D] flex flex-col hover:cursor-pointer">
                <div className="flex items-center justify-between">
                    <p className="text__para mt-0 text-[25px] font-semibold text-sky-700">Ticket Price:</p>
                    <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-0  font-bold text-orange-400">
                        $500 Rupees
                    </span>
                </div>
                <div className="mt-[30px]">
                    <p className="text__para  mt-0 font-semibold capitalize text-[22px] text-sky-700">
                        available time :
                    </p>
                    <ul className="mt-3">
                        <li className=" flex items-center justify-between mb-1">
                            <p className="text-[15px] leading-6 font-semibold">Monday</p>
                            <p className="text-[15px] leading-6 font-semibold">09 am to 5:30 pm</p>
                        </li>
                        <li className=" flex items-center justify-between mb-1">
                            <p className="text-[15px] leading-6 font-semibold">Tuesday</p>
                            <p className="text-[15px] leading-6 font-semibold">09 am to 5:30 pm</p>
                        </li>
                        <li className=" flex items-center justify-between mb-1">
                            <p className="text-[15px] leading-6 font-semibold">Wednesday</p>
                            <p className="text-[15px] leading-6 font-semibold">09 am to 5:30 pm</p>
                        </li>
                    </ul>
                </div>
                <button className="btn  justify-center ">Book appointment</button>
            </div>
        </>
    )
}
export default Sidepannel; 