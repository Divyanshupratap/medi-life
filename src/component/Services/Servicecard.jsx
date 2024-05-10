import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
const Servicecard=(props)=>{
   // const {name,desc,bgColor,textColor}=props;
    return(<>
    
        <div className="py-[30px] px-3 lg:px-5 hover:shadow-2xl hover:shadow-red-100 border border-solid hover:border-pink-600 bg-[#2D2D2D] text-gray-200  hover:cursor-pointer ">
            <div className="flex flex-row  ">
                <h2 className=" text-[30px] leading-9 text-sky-600 font-[700] hover:animate-bounce">
                    {props.item.name}
                 </h2>
                <div className="">
                {<GiHeartOrgan className="h-[40px] w-[70px] text-red-500 animate-bounce" />}
                {/* <img src="https://cdn5.vectorstock.com/i/1000x1000/65/49/cancer-care-logo-designs-vector-23116549.jpg h-[30px]"></img> */}
                </div>
            </div>
            <p className="text-[16px] leading-7 font-[400]  mt-5 text-gray-200">
                {props.item.desc}
            </p>
            <div className="flex items-center justify-between  mt-[30px]">
                <Link
                                    to="/doctors"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-sky-800 mt-[30px]
                                     flex items-center  justify-center group  hover:bg-red-500 hover:text-white hover:border-none" 
                                >
                                    <i className="fa-solid fa-arrow-right" ></i>
                </Link>
                <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] mt-[30px]" style={
                    {
                        background:`${props.item.bgColor}`,
                        color:`${props.item.color}`,
                        borderRadius:"6px 0 0 6px",
                    }
                }>
                    {props.item.id}
                </span>
            </div>
        </div>
        
    </>)
}
export default Servicecard;