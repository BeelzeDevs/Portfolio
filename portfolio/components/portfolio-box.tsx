"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioBoxProps{
    data: {
        id:number,
        title:string,
        descripcion:string,
        gif:string,
        urlGithub:string,
        urlDemo:string,
        urlYoutube:string,
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const [click,setClick] = useState(false);

    const {data} = props;
    const {title, descripcion, gif,urlGithub, urlDemo, urlYoutube} = data

    const handleImageClick = () =>{
        setClick( urlYoutube.length > 0);
    }
    const getEmbedUrl = (url: string) => {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
    };


    return ( 
        <div className="flex flex-col justify-between p-4 border border-teal-50/10 rounded-xl 
        max-w-full ring-2 ring-indigo-300/50 hover:ring-indigo-500/30">
            <div className="flex justify-center">
                <h3 className="mb-4 text-xl text-gray-50 font-bold">{title}</h3>
                
            </div>
            {!click &&
            <Image onClick={handleImageClick} 
            src={gif} alt="gif product"
            width={200} height={200}
            className="w-full rounded-2xl h-[250px]"
            priority
            unoptimized
            />
            }
            {click && urlYoutube.length > 0 &&
            <div className="relative w-full h-full pt-[57.25%] rounded-2xl overflow-hidden">
                {click &&
                    <button className="z-5 absolute top-0 right-0 rounded-2xl bg-secondary/80 p-2"
                    onClick={()=>setClick(false)}>x</button>
                }
                <iframe
                src={getEmbedUrl(urlYoutube)}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
            }
            <div className="flex justify-start mt-5">
                <p className="text-md">{descripcion}</p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
                <Link href={urlGithub} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-gray-950 hover:bg-gray-900/80">
                    Github
                </Link>
                {urlDemo &&
                <Link href={urlDemo} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-green-500 hover:bg-green-500/80">
                    Deploy
                </Link>
                }
                {urlYoutube &&
                <Link href={urlYoutube} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-red-600/80 hover:bg-red-600/60">
                    Youtube
                </Link>
                }
            </div>
        </div>
     );
}
 
export default PortfolioBox;