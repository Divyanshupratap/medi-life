import React from "react";
import doctor1 from "../../images/doctor1.png"
import { Link } from "react-router-dom";
// import doctor1 from "./images/doctor1.png";
// import doctor3 from "../../images/doctor3.jpg";
const About=()=>{
    return(
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-[50px] flex-col lg:flex-row">
                    <div className=" relative w-full md:w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src="https://www.shutterstock.com/shutterstock/photos/1724693776/display_1500/stock-photo-profile-photo-of-attractive-family-doc-lady-patients-consultation-friendly-smiling-reliable-1724693776.jpg"></img>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 mt-4 sidewise translate-y-1.5 ">
                        <h2 className="heading"> world best doctors team</h2> 
                        <p className="text__para mt-[30px] text ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsam labore ipsum cum exercitationem reiciendis dolorem! Rem hic id, similique officia delectus nemo voluptatibus. Sint.</p>
                        <p className="text__para mt-[30px] text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in tenetur, ipsam expedita nam voluptate, incidunt, alias iusto iste at soluta excepturi blanditiis molestias cupiditate!</p>
                        <Link to={'/'}><button className="btn">Know more</button></Link>
                    </div>
                </div>   
            </div>

            {/* ======content======================================= */}
            
        </section>
    )
}
export default About