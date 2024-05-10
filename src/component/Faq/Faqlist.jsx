import { faqs } from "../../data/faqs";
import React from "react";
import Faqitems from "./Faqitems";
const Faqlist=()=>{
    return(<>
        <ul className="mt-[38px]">
            {faqs.map((items,index)=><Faqitems items={items} key={index}/>)}
        </ul>
    </>)
}
export default Faqlist;