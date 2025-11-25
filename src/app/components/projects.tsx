"use client";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className=" section-background min-h-screen w-full container mx-auto px-8 md:px-16 max-w-7xl py-20">
            <h2 className="text-6xl md:text-7xl font-[Fasdeco] text-center md:text-left mb-12">
                My <span className="font-sans font-bold">Projects</span>
            </h2>


            <div className="flex flex-wrap justify-center md:justify-start gap-10">


                <a href="/project/1">
                    <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden">
                        {/* max-w-md - sets the maximum width to medium size */}
                        {/* rounded-lg - large rounded corners */}
                        <img
                            src="https://placehold.co/600x400/2d2d2d/f0f0f0?text=Project+1"
                            alt="Project One"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </a>


                <a href="/project/2">
                    <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-lg overflow-hidden">

                        <img
                            src="https://placehold.co/600x400/2d2d2d/f0f0f0?text=Project+2"
                            alt="Project Two"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </a>

            </div>

        </section>
    );
}