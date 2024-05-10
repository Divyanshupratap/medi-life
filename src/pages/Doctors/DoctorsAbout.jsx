import React from "react";
const DoctrosAbout=()=>
{
    return(
    <>
        <div className="text-gray-200">
            <div>
                <h3 className="text-[20px] leading-[30px] font-semibold flex items-center gap-2 capitalize text-orange-400">
                    about of 
                    <span className="text-sky-700 font-bold text-[24px] leading-9">
                      Dr.  Divyanshu Pratap
                    </span>
                </h3>
                <p className="text__para text-gray-200">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam dolorem nulla debitis nostrum iste molestias nihil enim consequuntur. Optio, cumque voluptate facilis quis eligendi deserunt blanditiis modi nulla tenetur?
                </p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] font-semibold flex items-center gap-2 capitalize text-orange-400">
                    education:
                </h3>
                <ul className="pt-4 md:p-5 hover:shadow-2xl hover:shadow-gray-500 bg-[#2D2D2D] hover:cursor-pointer">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-[15px] leading-6  capitalize text-sky-700"> 24-04-2025</span>
                            <p className="text-[16px] leading-6 capitalize font-medium text-red-500">phd in EYE</p>
                        </div>
                        <p className="text-[18px]  capitalize font-medium">appolo hospital</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-[15px] leading-6  capitalize text-sky-700"> 24-04-2025</span>
                            <p className="text-[16px] leading-6 capitalize font-medium text-red-500">phd in backchodi</p>
                        </div>
                        <p className="text-[18px]  capitalize font-medium">ammero ka hospital</p>
                    </li>
                </ul>
            </div>
            

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] font-semibold flex items-center gap-2 capitalize text-orange-400">experience :</h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
                    <li className="p-4 rounded bg-[#2D2D2D] hover:shadow-2xl hover:shadow-orange-900 hover:cursor-pointer">
                        <span className="text-yellow-500 text-[15px] leading-6 font-semibold">
                            07-04-2025 to 08-05-2050
                        </span>
                        <p className="text-[15px] leading-6 capitalize font-medium  text-sky-700">phd in backchodi</p>
                        <p className="text-[15px] leading-6 capitalize font-medium text-red-500">ammero ka hospital new delhi</p>
                    </li>
                    <li className="p-4 rounded bg-[#2D2D2D] hover:shadow-2xl hover:shadow-orange-900 hover:cursor-pointer">
                        <span className="text-yellow-500 text-[15px] leading-6 font-semibold">
                            07-04-2025 to 08-05-2050
                        </span>
                        <p className="text-[15px] leading-6 capitalize font-medium  text-sky-700">phd in backchodi</p>
                        <p className="text-[15px] leading-6 capitalize font-medium text-red-500">ammero ka hospital new delhi</p>
                    </li>
                </ul>
            </div>
        </div>    
    </>
    )
}
export default DoctrosAbout;