import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { DiCoda } from "react-icons/di";
import { CgMathMinus } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import logo1 from "../../images/logo1.png";
import { Link } from "react-router-dom";
const sociallinks=[
    {
        path:"https://github.com/Divyanshupratap",
        icon: <FaGithub/>
    },
    {
        path:"https://www.instagram.com/?next=%2F",
        icon: <IoLogoInstagram className="group-hover:text-white w-4 h-5"/>,
    },
    {
        path:"https://www.linkedin.com/in/divyanshu-pratap-singh-6a422622a/",
        icon: <FaLinkedin className="group-hover:text-white w-4 h-5"/>
    }
];
const quicklinks1=
[
    {
        path:"/home",
        display:"Home",
    },
    {
        path:"/",
        display:"About Us",
    },
    {
        path:"/service",
        display:"Services",
    },
    {
        path:"/",
        display:"Blog",
    },
];
const Footer=()=>{
    return(
        <footer className="pb-5 pt-10 shadow-2xl shadow-blue-500/50 outline outline-offset-2 outline-cyan-500">
            <div className="container">
                <div className=" flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        {/* <img src={logo1} alt="" className="h-[75px] w-[190px]"></img> */}
                        <h3 className=" text-[35px] text-headingColor capitalize">Follow Us</h3>
                        <div className="flex items-center gap-3 mt-4">
                            {sociallinks.map((link,index)=>(
                                <Link to={link.path} key={index} 
                                className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <img src={link.icon}></img></Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[35px] leading-[30px] font-[500] mb-6 text-headingColor"> Quick Links</h2>
                        <ul>
                            {quicklinks1.map((item,index)=> <li key={index} className=" mb-4">
                                <Link to={item.path} className="text-[26px] leading-7 font-[400] text-textColor text-center hover:text-rose-600">{item.display}</Link>
                                </li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[35px] leading-[30px] font-[500] mb-6 text-headingColor"> Contact Us</h2>
                        <ul>
                            
                            <li className="  text-[26px]">Email:  <span className="text-[26px] hover:cursor-pointer hover:text-blue-800 gap-4"> dpsing2292k@gmail.com</span></li>
                            
                            <li className="  text-[26px]">Phone No: <span className="text-[26px] hover:cursor-pointer hover:text-blue-800"> 9997724862</span></li>
                            
                            <li className=" i text-[26px]">Address: <span className="text-[26px] hover:cursor-pointer hover:text-blue-800"> c1 rohini Delhi</span></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;