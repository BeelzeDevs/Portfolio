import AvatarAbout from "@/components/avatar-about";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import IntroAbout from "@/components/introAbout";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return(
        <main className="relative">
            <TransitionPage />
            <ContainerPage>
                <AvatarAbout />

                <IntroAbout />

                <h1 className="text-2xl leading-tight text-center md:text-left 
                md:text-5xl mt-10">Toda mi{' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />
                <TimeLine />

            </ContainerPage>
    
        </main>
    );
}
export default AboutMePage;