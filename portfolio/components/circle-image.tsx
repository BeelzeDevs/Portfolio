"use client"

import Image from "next/image";
import TransitionComponents from "./transition-component";

const CircleImage = () =>{
    return(
        <TransitionComponents position="bottom" className="bottom-0 right-0 hidden 
        md:inline-block md:absolute">
            <Image src="/circles.png" width={200} height={200} alt="Circle"
            className="h-full w-full" />
        </TransitionComponents>
    );
}
export default CircleImage;