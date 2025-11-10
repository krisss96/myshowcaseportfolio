export default function HomeSection() {
    return (
        <section
            id="home"
            className="flex flex-col items-start justify-center min-h-screen px-16">
            <h1 className="text-[9rem] md:text-[14rem] lg:text-[16rem] leading-tight font-[Fasdeco]">Portfolio</h1>
            { /*md:text - from md breakpoint use ...rem
                lg:text- from lg breakpoint use ...rem
                leading-tight - reduce line-height */}
            <div className="mt-4 text-2xl leading-8"> {/* leading-... - sets the line-height */}
                <div>UX Designer</div>
                <div>Frontend Developer</div>

            </div>
            <div className="flex-1 flex items-center justify-center md:justify-end">
                <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-2xl bg-black/30">

                    <video
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src="/static/badgeAnim.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
