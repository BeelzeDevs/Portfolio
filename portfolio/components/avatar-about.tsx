"use client"
import Image from "next/image"
import TransitionComponents from "./transition-component"

const AvatarAbout = () =>{
    return(
    <TransitionComponents position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
        <Image src="/avatar-about.png" width={350} height={350} 
        className="w-full h-full" alt="avatar" />
    </TransitionComponents>
    );
}
export default AvatarAbout;