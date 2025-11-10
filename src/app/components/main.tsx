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
        </section>
    );
}
