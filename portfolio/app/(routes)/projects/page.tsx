import AvatarProjecto from "@/components/avatar-projects";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import Projects from "@/components/projects";
import TransitionPage from "@/components/transition-page";

const ProjectsPage = () => {
    return(
        <main className="relative">
            <TransitionPage />
            <ContainerPage>
                <AvatarProjecto />
                <CircleImage />
                
                <Projects />
            </ContainerPage>
        </main>
    );
}

export default ProjectsPage;