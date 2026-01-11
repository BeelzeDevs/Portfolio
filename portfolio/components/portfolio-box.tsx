"use client"

import type { LabelType } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiPython, SiDotnet,SiNodedotjs,SiReact,SiTypescript,SiTailwindcss,SiVite,SiGnubash,SiNextdotjs,SiCrystal, SiOpenapiinitiative, SiPostgresql, SiSqlite,
    SiJsonwebtokens, SiPandas, SiDocker,SiExpress, SiBlazor , 
    SiSequelize} from "react-icons/si";
import { IconType } from "react-icons";
import {DiDatabase, DiGithubBadge} from 'react-icons/di';
import { TbBrandCSharp } from "react-icons/tb";
import { FaVuejs, FaRegObjectUngroup  } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";

const iconMap: Record<string, IconType> = {
  python: SiPython,
  csharp: TbBrandCSharp,
  dotnet: SiDotnet,
  node: SiNodedotjs,
  react: SiReact,
  net8: SiDotnet,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  bash: SiGnubash,
  vite: SiVite,
  vue : FaVuejs,
  next: SiNextdotjs,
  postgreSql: SiPostgresql,
  sqlServer : DiDatabase,
  jwt: SiJsonwebtokens,
  pandas: SiPandas,
  crystal: SiCrystal,
  openapi: SiOpenapiinitiative,
  docker: SiDocker,
  pinia : FaVuejs,
  vuerouter: FaVuejs,
  chart : IoBarChartSharp,
  entity : FaRegObjectUngroup,
  apirest : AiFillApi,
  reactRout : SiReact,
  express: SiExpress,
  sequelize: SiSequelize,
  blazor : SiBlazor,
};



interface PortfolioBoxProps{
    data: {
        id:number,
        title:string,
        descripcion:string,
        gif:string,
        urlBackend : string,
        urlGithub:string,
        urlDemo:string,
        urlYoutube:string,
        badges : LabelType[],
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const [click,setClick] = useState(false);

    const {data} = props;
    const {title, descripcion, gif,urlBackend, urlGithub, urlDemo, urlYoutube,badges} = data

    const handleImageClick = () =>{
        setClick( urlYoutube.length > 0);
    }
    const getEmbedUrl = (url: string) => {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
    };


    return ( 
        <div className="grid grid-cols-1 grid-rows-[40px,250px,1fr,.5fr,.3fr] justify-start gap-3 p-4 border border-teal-50/10 rounded-xl 
        max-w-full ring-2 ring-indigo-300/50 hover:ring-indigo-500/30">
            <div className="flex justify-center items-center w-full h-full row-start-1 max-h-[40px]">
                <h3 className="mb-4 text-xl text-gray-50 font-bold font-mono ">{title}</h3>
                
            </div>
            {!click &&
            <Image onClick={handleImageClick} 
            src={gif} alt="gif product"
            width={200} height={200}
            className="w-full rounded-2xl h-[250px] max-h-full"
            priority
            unoptimized
            />
            }
            {click && urlYoutube.length > 0 &&
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
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
            <div className="flex justify-center items-start font-sans flex-wrap p-1">
                <p className="text-md ">{descripcion}</p>
            </div>
            { badges &&
                <div className="flex justify-start items-start h-full flex-wrap text-sm md:text-sm lg:text-sm cursor-default gap-1">
                    {badges.map((i)=>{
                    
                    const Icono = iconMap[i.icon];
                       return( 
                       <ul key={i.id} className="inline-block p-0.5"> 
                            <li className={`${i.color} flex gap-2 flex-nowrap p-1 items-center`}>
                                {
                                    i.icon && 
                                    <Icono className="h-full text-slate-200" size={16}/>
                                }
                                
                                <p className="pr-1 font-semibold font-sans">{i.name}</p>
                            </li>
                        </ul>
                       );
                    }
                    )}   
                </div>

            }
            <div className="flex justify-center items-center gap-5 flex-wrap pt-5">
                
                {urlBackend &&
                <Link href={urlBackend} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-indigo-700 hover:bg-indigo-700/80 cursor-pointer">
                    Backend
                </Link>
                }
                <div className="flex bg-gray-950 hover:bg-gray-900/80 p-2 transition duration-150 rounded-lg justify-center items-center gap-2 cursor-pointer">
                    <DiGithubBadge className="h-full w-full" />
                    <Link href={urlGithub} target="_blank" 
                    className=" ">
                        Github
                    </Link>
                </div>
                {urlDemo &&
                <Link href={urlDemo} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-green-500 hover:bg-green-500/80 cursor-pointer">
                    Deploy
                </Link>
                }
                {urlYoutube &&
                <Link href={urlYoutube} target="_blank" 
                className="p-2 transition duration-150 rounded-lg bg-red-600/80 hover:bg-red-600/60 cursor-pointer">
                    Youtube
                </Link>
                }
            </div>
        </div>
     );
}
 
export default PortfolioBox;