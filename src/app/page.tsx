import HomeSection from "./components/main";
import ProjectsSection from "./components/projects";
import AboutSection from "./components/about";
import ContactsSection from "./components/contacts";

export default function Home() {
    return (
        <main>
            <HomeSection />
            <ProjectsSection />
            <AboutSection />
            <ContactsSection />
        </main>
    );
}
