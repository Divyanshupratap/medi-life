import React from "react";
import { Link } from "react-router-dom";
import About from "../component/About/About";
import Faqlist from "../component/Faq/Faqlist";
import Crousal from "../component/Crousal/Crousal";
import Servicecard from "../component/Services/Servicecard";
import ServiceList from "../component/Services/ServiceList";
import Doctorlist from "../component/Doctors/Doctorlist";


const Home=()=>{
    return(
        <>
            <>
            <div className="">
            <section className="hero_section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* =============content===================== */}

                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text[60px] md:leading-[70px]">
                                    The Hospital that Care-For You <br/>
                                    Best team you Ever know
                                </h1>
                                <p className="text__para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit veritatis enim obcaecati deserunt voluptatem, ad ducimus beatae quas libero? Debitis iste odio distinctio doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!</p>
                                <button className="btn">Book Appointment</button>
                                
                            </div>
                            {/* ===============hero counter============================== */}
                            <div className=" mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[800] text-headingColor"> 60+</h2>
                                    <span className="w-[100px] h-2 bg-red-600 rounded-full block mt-[-14px] "></span>
                                    <p className="text__para">Year of Experience</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[800] text-headingColor"> 6000+</h2>
                                    <span className="w-[100px] h-2 bg-red-600 rounded-full block mt-[-14px] "></span>
                                    <p className="text__para">Satisfied Customer</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[800] text-headingColor"> 45000+</h2>
                                    <span className="w-[100px] h-2 bg-red-600 rounded-full block mt-[-14px] "></span>
                                    <p className="text__para">Years of customers satisfiction </p>
                                </div>

                            </div>
                            <div className=" mt-12">
                                    <butoon className="btn"> know more</butoon>
                            </div>
                        </div>
                        {/* ===========right image====================== */}
                        <div className="flex gap-[-30px] justify-end">
                            <div>
                                <img src="https://media.istockphoto.com/id/1394644023/photo/smiling-asian-female-doctor-in-lab-coat-with-arms-crossed-against-looking-at-camera.jpg?s=612x612&w=0&k=20&c=WFWzhL0rQzoWErRa4MiTS_sxzVRNwCwkmCTffBz0S8o=" className="w-full mb-[30px] h-[450px] mt-[-36px] rounded-md" alt="image"/>
                            </div>

                        </div>
            
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                        provide the best medical services
                        </h2>
                        <p className="text__para text-center">
                            world class for everyone.our health system offers unmatched expert tema 
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
                        
                        <div className="py-[30px] px-5 hover:shadow-2xl border border-solid border-b-pink-600">
                            <div className="flex items-center justify-center">
                                <img src="https://cdn.dribbble.com/users/10119164/screenshots/17277453/media/20265676e8cd12f4eacb512506836a67.jpg?resize=400x300&vertical=center" alt="just logo"/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">Find a Docotr's</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum adipisci cupiditate cum dignissimos
                                </p>

                                <Link
                                    to="/doctors"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                    mx-auto flex items-center  justify-center group  hover:bg-red-500 hover:text-white hover:border-none" 
                                >
                                    <i className="fa-solid fa-arrow-right" ></i>
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5 hover:shadow-2xl border border-solid border-b-pink-600">
                            <div className="flex items-center justify-center">
                                <img src="https://cdn.dribbble.com/users/10119164/screenshots/17277453/media/20265676e8cd12f4eacb512506836a67.jpg?resize=400x300&vertical=center" alt="just logo"/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">Find More Services</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum adipisci cupiditate cum dignissimos
                                </p>

                                <Link
                                    to="/services"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                    mx-auto flex items-center justify-center group  hover:bg-red-500 hover:text-white hover:border-none" 
                                >
                                    <i className="fa-solid fa-arrow-right" ></i>
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5 hover:shadow-2xl border border-solid border-b-pink-600">
                            <div className="flex items-center justify-center">
                                <img src="https://cdn.dribbble.com/users/10119164/screenshots/17277453/media/20265676e8cd12f4eacb512506836a67.jpg?resize=400x300&vertical=center" alt="just logo"/>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">Our Contact Section</h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum adipisci cupiditate cum dignissimos
                                </p>

                                <Link
                                    to="/contact"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                    mx-auto flex items-center justify-center group  hover:bg-red-500 hover:text-white hover:border-none" 
                                >
                                    <i className="fa-solid fa-arrow-right" ></i>
                                </Link>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
            <About/>
            {/* =====================services section============================ */}
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center capitalize">our medical services</h2>
                    <p className="text__para text-center capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet.</p>
                </div>
            </div>
            

            {/* ==============================services section end===================== */}
            <ServiceList/>
            {/* ====================features section ====================================== */}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row ">
                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                Get Virtual treatment
                            </h2>
                            <ul>
                                <li className="text__para">
                                    1. Schedule the appontment directly
                                </li>
                                <li className="text__para">
                                    2. Search for your physician here
                                </li>
                                <li className="text__para">
                                    3. koe bimari ha to bol bsdk warna nikal
                                </li>
                                <li className="text__para">
                                    4.aaye ga chinta mat kar chat bot ha jkadsfksaklfjslak
                                </li>
                            </ul>
                            <Link to={'/'}><button className="btn">Learn more</button></Link>
                        </div>
                        

                        {/* =====features image============== */}
                        <div className=" md:w-[500px] z-10 xl:w-[770px] lg:mt-0 flex mt-[50px]  justify-end hover:cursor-pointer hover:shadow-2xl hover:scale-105 ease-in-out">
                            <img src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="features section image"></img>
                        </div>

                    </div>
                </div>
            </section>
            {/* =========================features section end====================================== */}
            {/* =====================doctors section=================================================== */}
                {/* <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center capitalize">our bad doctors </h2>
                        <p className="text__para text-center capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,lorem15 amet.</p>
                        
                    </div>
                    <Doctorlist/>
                </div>
                </section> */}
            {/* ===================== doctors section end============================================== */}
                

            {/* ====================faq section=========================== */}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                            <img src="https://as2.ftcdn.net/v2/jpg/03/46/97/03/1000_F_346970372_5VncR4AbwCNfUEO1DKrgm7wV3T4uw8fr.jpg">
                            </img>
                        </div>
                        <div className="w-full md:w-1/2 lg:ml-5">
                            <h2 className="heading text-center font-sans"> Some of frequently asked Questions</h2>
                            <Faqlist/>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================faq end=============================== */}
            {/* ============================testimonial============================ */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center ">What our Patient Says</h2>
                        <p className="text__para text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta. Lorem ipsum dolor sit amet.</p>
                    </div>
                    {/* <Crousal/> */}
                </div>
            </section>


            {/* ================================testimonial end======================== */}
            </div>
        </>
        </>
    );
};
export default Home;