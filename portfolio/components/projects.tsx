import { dataPortfolio } from "@/data";
import PortfolioBox from "./portfolio-box";

const Projects = () => {
    return ( 
        <div className="flex flex-col justify-center h-full md:pb-[300px] lg:pb-[300px] md:mb-20">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos{' '}
                        <span className="text-secondary font-bold">trabajos realizados</span>
                    </h1>
                    <div className="relative z-10 grid max-w-7xl gap-4 
                    mx-auto mt-4 lg:grid-cols-3 sm:grid-cols-2">
                        {dataPortfolio.map((data)=>(
                            <PortfolioBox key={data.id} data={data} />

                        ))}
                    </div>
        </div>
     );
}
 
export default Projects
;