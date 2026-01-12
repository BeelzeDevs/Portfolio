import AvatarProjecto from "@/components/avatar-projects";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import Projects from "@/components/projects";
import TransitionPage from "@/components/transition-page";
import { IoWarningOutline } from "react-icons/io5";

const ProjectsPage = () => {
    return(
        <main className="relative">
            <TransitionPage />
            <ContainerPage>
                <AvatarProjecto />
                <CircleImage />
                
                <section className="relative w-full p-10 my-10 flex items-center justify-center cursor-default">
                    <div role="alert"
                        className="absolute h-full w-full max-w-5xl flex justify-center items-center ring-2 ring-amber-500/70 hover:ring-amber-400 transition rounded-xl p-4 gap-4"
                    >
                        <IoWarningOutline className="w-10 h-10 min-w-8 min-h-8 text-amber-500 hover:text-amber-400" />
                        <p className="font-semibold text-white text-base md:text-lg leading-tight">
                        Los deploys pueden tardar hasta <span className="text-amber-500 hover:text-amber-400">50 seg</span> hasta iniciar tanto frontend como backend <span className="text-amber-500 hover:text-amber-400 ">(cold-start)</span>.                            
                        Gracias por tu paciencia.
                        </p>
                    </div>
                </section>

                <Projects />
            </ContainerPage>
        </main>
    );
}

export default ProjectsPage;