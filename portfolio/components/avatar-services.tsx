"use client"
import Image from "next/image";
import TransitionComponents from "./transition-component";

const AvatarServices = () => {
    return ( 
        <TransitionComponents 
        position="right" 
        className="z-0 bottom-0 left-0 hidden md:inline-block md:absolute "
        >
            <Image 
            src="/services.png" 
            width={300} 
            height={300} 
            alt="Avatar services"
            className="w-[150px] lg:w-[200px] h-full z-3" 
            />
        </TransitionComponents>
        
     );
}
 
export default AvatarServices;