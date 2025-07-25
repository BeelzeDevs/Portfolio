"use client"

import Image from "next/image";
import TransitionComponents from "./transition-component";

const AvatarProjecto = () => {
    return ( 
        <TransitionComponents position="bottom" className="z-0 bottom-0 -left-15 hidden md:inline-block md:absolute">
            <Image src="/avatar-project.png" 
            width={300} height={300} 
            className="w-full h-full" 
            alt="Avatar projects" />
        </TransitionComponents>
     );
}

export default AvatarProjecto;