import React from "react";
import ServiceList from "../component/Services/ServiceList";
const Services=()=>{
    return(
        <>
        <section className="bg-stone-900">
            <div className="container ">
            <div><h1 className="text-sky-500 text-center text-[38px] heading leading-9">Our Medical <span className="text-red-500">Services</span></h1></div>
            <ServiceList/>
            </div>
        </section>
        </>
    )
};
export default Services;