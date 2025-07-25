import AvatarContact from "@/components/avatar-contact";
import ContactInputs from "@/components/contact-inputs";
import ContactMail from "@/components/contact-mail";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const Contact = () => {
    return (
        <main className="relative">
            <TransitionPage />
            <ContainerPage>
                <AvatarContact />
                <ContactInputs />
                <ContactMail />

            </ContainerPage>
        </main>

     );
}
 
export default Contact;