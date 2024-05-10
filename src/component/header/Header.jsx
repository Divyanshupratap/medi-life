import React from "react";
import { useEffect,useRef } from "react";
import { NavLink,Link } from "react-router-dom";
import logo1 from '../../images/logo1.png'
const navlink=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'contact',
        display:'Contact'
    }
]
const Header=()=>{
    const headerref=useRef(null);
    const menuref=useRef(null);
    const handleStickyheader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop> 80|| document.documentElement.scrollTop>80)
            {
                headerref.current.classList.add('sticky__header');
            }
            else
            {
                headerref.current.classList.remove('sticky__header');
            }
        })
    }
    useEffect(()=>{
        handleStickyheader()
        return ()=>window.removeEventListener('scroll',handleStickyheader);
    })
    const toggleMenu=()=>menuref.current.classList.toggle('show__menu');
    return(
        <header className="header flex items-center my-2 shadow-2xl shadow-white-400 z-[1000] opacity-100 backdrop-blur-3xl" ref={headerref}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* {======logo======} */}
                    <Link to={'/'}className=" hover:cursor-pointer">
                        <img src={logo1} alt="this is just logo" className=" h-[75px] w-[190px]"></img>
                    </Link>
                    {/* ======menu=========== */}
                    <div className="navigation" ref={menuref} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {
                                navlink.map((link,index)=><li key={index}>
                                    <NavLink to={link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[20px] leading-7 font-[600]':'text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                    {/* ==============nav right============================== */}
                    <div className=" flex items-center gap-4 ">
                        <div className="hidden">
                            <Link to='/'>
                                <figure className="w-[40px] h-[40px]  rounded-full hover:cursor-pointer hover:ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-50 ">
                                    <img src="https://e7.pngegg.com/pngimages/178/419/png-clipart-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-thumbnail.png" className="w-full rounded-full " alt="just admin"></img>
                                </figure>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login">
                                <button className="bg-primaryColor py-2 px-6  text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Login</button>
                            </Link>
                        </div>
                        <span className="md:hidden" onClick={toggleMenu}>
                                <i className="fa-solid fa-bars w-6 h-6 cursor-pointer"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;