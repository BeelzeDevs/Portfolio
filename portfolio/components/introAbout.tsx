"use client"
import Image from "next/image";
import TransitionComponents from "./transition-component";

const IntroAbout = () => {
    return ( 
        <TransitionComponents position="bottom" className="flex flex-col">
            <h1 className="text-2xl leading-tight text-center md:text-5xl mt-0">
                Acerca <span className="font-bold text-secondary">de mí</span>
            </h1>
            <div className="flex flex-col justify-center items-center h-full w-full mt-10 px-5 ">
                <Image src={"/profile1.png"} alt="Profile pic"
                width={200} height={200}
                className="rounded-full border-2 border-rounded-xl border-secondary"
                />
                <div className="flex justify-around w-full mt-5 gap-10 w-full">
                    <button onClick={() => window.open("/cv-es.pdf", "_blank")}
                    className="px-5 py-3 rounded-xl border-2 border-secondary text-xl md:text-2xl text-secondary text-slate-100
                    cursor-pointer hover:shadow-xl hover:shadow-secondary/50 ">
                        Cv Español
                    </button>
                    <button onClick={() => window.open("/cv-en.pdf", "_blank")}
                    className="px-5 py-3 rounded-xl border-2 border-secondary text-xl md:text-2xl text-secondary text-slate-100
                    cursor-pointer hover:shadow-xl hover:shadow-secondary/50">
                        Cv English
                    </button>
                </div>
                <div className="flex flex-col justify-center text-4lg leading-tight md:text-xl gap-5 text-slate-300 mt-10 px-10 md:px-5 ">
                    <p>
                        Soy Ignacio Aprile, Técnico Superior en Programación con perfil full-stack y formación en análisis de datos. Comencé mi camino en la UTN, escribiendo algoritmos en papel y desarrollando mis primeros programas en C++, lo que me dio una base sólida en lógica y programación orientada a objetos.
                    </p>
                    <p>
                        Hoy me especializo en el desarrollo con .NET, donde me siento muy cómodo construyendo APIs, arquitecturas limpias y soluciones escalables. Sin embargo, también disfruto trabajar con tecnologías del ecosistema JavaScript como React, Next.js o Node.js, lo que me permite adaptarme con fluidez a distintos entornos y desafíos.
                    </p>
                    <p>
                        Me apasiona la tecnología no solo por lo que permite crear, sino también por el desafío constante que representa. Busco formar parte de equipos donde pueda aportar valor, seguir creciendo profesionalmente y colaborar en el desarrollo de soluciones que marquen una diferencia.
                    </p>
                </div>
               
            </div>
        </TransitionComponents>
     );
}
 
export default IntroAbout;