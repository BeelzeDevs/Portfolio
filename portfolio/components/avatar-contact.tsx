import Image from "next/image";
import TransitionComponents from "./transition-component";

const AvatarContact = () => {
    return ( 
        <TransitionComponents position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-contact.png" 
            width={300} height={300} 
            className="z-0 w-[180px] lg:w-[250px] h-full " 
            alt="Avatar contact" />
        </TransitionComponents>
     );
}
 
export default AvatarContact;