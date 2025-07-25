import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicePage = () =>{
    return(
        
        <main className="relative">
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="z-10 grid items-center justify-center relative
            h-screen max-w-4xl gap-6 mx-auto md:grid-cols-2 px-5 md:px-20 mt-40 md:mt-0">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight 
                    text-center md:text-left md:text-4xl mb-5">
                        Mis{' '} <span className="font-bold text-secondary">Servicios</span>
                    </h1>
                    <div className="flex flex-col mb-8 md:mb-12 text-sm md:text-base lg:text-5md text-gray-300/90 px-4 md:px-0 max-w-3xl mx-auto gap-2">
                        <p >
                            Ofrezco servicios profesionales de <span className="text-stone-50">desarrollo frontend y backend</span>, combinando tecnologías modernas para crear aplicaciones <span className="text-stone-50">robustas, escalables y atractivas</span>.
                        </p>
                        <p >
                            Trabajo con <span className="text-stone-50">.NET, React y Next.js</span> para construir interfaces <span className="text-stone-50">intuitivas y responsivas</span>, alineadas con la identidad del proyecto.
                        </p>
                        <p >
                            Desarrollo <span className="text-stone-50">APIs seguras y fáciles de mantener</span> con .NET y Node.js (Express), implementando autenticación con <span className="text-stone-50">JWT</span>.
                        </p>
                        <p >
                            Cuento con experiencia en <span className="text-stone-50">bases de datos relacionales</span> como SQL Server y PostgreSQL.
                        </p>
                        <p>
                            Mi enfoque es ofrecer <span className="text-stone-50">soluciones integrales</span>, priorizando la calidad, el rendimiento y una comunicación clara en cada etapa del desarrollo.
                        </p>
                    </div>
                    <Link
                    href={"/contact"} 
                    className="cursot-pointer px-3 py-3 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>

                </div>
                {/* 2 elemento Slider */}
                <SliderServices />
            </div>
        </main>
    );
}
export default ServicePage;