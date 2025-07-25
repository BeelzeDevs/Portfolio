"use client"

import CountUp from "react-countup";

import { dataCounter } from "@/data";
 
const CounterServices = () =>{
    return(
        <div className="grid mx-auto max-w-3xl grid-cols-[1fr_1fr_1fr] gap-3 
        my-8 md:grid-cols-3 md:gap-6 ">
        {dataCounter.map(({id,endCounter,text,lineRight,
        lineRightMobile}) =>{
            return(
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'}
                    ${lineRightMobile && 'border-e-gray-100'}${" px-4"}
                    `}> 
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                        + <CountUp end={endCounter} start={0} duration={5} />
                        </p>
                        <p className="text-xs uppercase max-w-[100px]">{text}</p>
                    </div>
                </div>
            );
        }
        
        )}
        </div>
    );
}
export default CounterServices;