"use client"

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";

const Introduction = () =>{
    return(
        <section className="z-20 w-full bg-darkBg/30 relative">
            <div className='z-20 grid items-center h-full px-5 py-30 grid-rows-[.1fr_1fr_.3fr] grid-cols-[1fr] w-full
            sm:py-30 sm:grid-cols-[.40fr_.60fr] sm:grid-rows-[60px_1fr] sm:gap-3 '>
                <div className='z-20 w-full h-20 col-span-2 row-start-1 col-end-3 flex justify-center items-center py-5 sm:h-full'>
                    {/* espacio subtitulo */}
                    <h2 className='text-4xl sm:text-4xl font-bold py-2 px-3 pulse brightness-85'>Ignacio <span className=''>Aprile</span></h2>
                </div>
                <div className='z-20 flex flex-col items-end relative row-start-2 col-span-2 w-full h-full sm:row-start-2 sm:row-end-3 sm:col-end-2'>
                    <Image src="/home.png" priority fill className="object-contain object-center sm:object-contain sm:object-right" alt="Profile pic" 
                    />
                </div >
                
                <div className='flex flex-col items-center row-start-3 col-span-2 w-full sm:items-start sm:col-start-2 sm:row-start-2'>
                    <h1 className='text-2xl
                    sm:text-4xl '>
                        Si puedes pensarlo, 
                    </h1>
                    <TypeAnimation repeat={Infinity} wrapper='span'
                    sequence={[
                        "puedes programarlo",
                        1000,
                        "puedes optimizarlo",
                        1000,
                        "puedes implementarlo",
                        1000,
                        "puedes desarrollarlo",
                        1000
                    ]}
                    speed={50}
                    cursor={false}
                    className="text-2xl font-bold inline-block text-secondary sm:text-4xl sm:text-left"
                    />
                    
                    <div className='py-5 w-full md:py-10'>
                        <p className='text-1xl sm:text-2xl'>
                            Como Técnico Superior en Programación, me dedico al desarrollo de software, aplicaciones web y de escritorio,
                            trabajando tanto en el back-end como en el front-end.
                        </p>
                    </div>
                    <div className='z-20  flex items-center justify-left gap-3 sm:gap-10'>

                        <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 ">
                            Ver proyectos
                        </Link>
                        <Link href="/contact" className="text-secondary border-2 px-3 py-2 transition-all  cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary hover:border-secondary">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Introduction;