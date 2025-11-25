import HomeSection from "./components/main";
import ProjectsSection from "./components/projects";
import AboutSection from "./components/about";
import ContactsSection from "./components/contacts";

export default function Home() {
    return (
        <main>
            {/* 'position: sticky' keeps it in view while the next one scrolls up.
              Increasing 'z-index'; ensures the next section
              slides ON TOP of the previous one, creating the "card stack" effect.
            */}

            <div className="sticky-section z-10">
                <HomeSection />
            </div>

            <div className="sticky-section z-20">
                <ProjectsSection />
            </div>

            <div className="sticky-section z-30">
                <AboutSection />
            </div>

            <div className="sticky-section z-40">
                <ContactsSection />
            </div>
        </main>
    );
}

