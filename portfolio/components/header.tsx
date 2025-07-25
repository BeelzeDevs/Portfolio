import Link from "next/link";

import TransitionComponents from "./transition-component";

import { socialNetworks } from "@/data";

const Header = () =>{
    return(

    <TransitionComponents position="bottom" 
    className="absolute z-40 px-20 inline-block w-full top-5 md:top-10 ">
        <header>
            <div className="container justify-between max-w-6xl mx-auto md:flex">
                <Link href="/">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        Beelze
                        <span className="text-secondary">Devs</span>
                    </h1>
                </Link>
                <div className="flex items-center justify-center gap-7">
                    {socialNetworks.map(({logo, src, id})=>{
                        
                        return(
                            <Link key={id}
                            href={src}
                            target={`${src.length > 0 ? "_blank" : ""}`}
                            className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    </TransitionComponents>

    );
}

export default Header;