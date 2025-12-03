"use client";

import { useEffect, useRef } from 'react';

export default function HomeSection() {
    const textRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        const timer = setTimeout(() => {
            textRef.current?.classList.add('active');
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section
            id="home"
            className=" section-background flex flex-row md:flex-row items-center justify-center md:justify-between min-h-screen w-full mx-auto px-8 md:px-16 max-w-none pt-32 pb-20">
            {/* max-w-none - allows the section to span the full width of the viewport */}
            {/* pt - padding-top */}
            {/* pb - padding-bottom */}
            <div className="flex-1 md:flex-[0.35] text-center md:text-left mb-10 md:mb-0">
                {/* md:flex-[0.35] - on medium screens and up, this div takes up 35% of the width */}
                {/*md - min-width*/}
                <h1 id="header-main" className="leading-tight font-[Fasdeco] ">Portfolio</h1>
                {/* lg - large screens */}
                <div id="main-text"  ref={textRef}  className="font-[Afante]">
                    <div>UX Designer</div>
                    <div>Frontend Developer</div>
                </div>
            </div>

            <div className=" animation flex-1 md:flex-[2.2] flex flex-col items-center justify-center md:justify-end mt-20"
                 onAnimationEnd={() => {
                     videoRef.current?.play();
                 }}
            >
                <div id="badgestring" className="font-[Fasdeco]">KristiyanaPetrova</div>
                <div className="w-full max-w-none md:w-[96%] lg:w-[99%] overflow-hidden shadow-2xl h-[78vh] md:h-[95vh] lg:h-[104vh] ">
                    <video
                        className="badge-anim"
                        loop={false}
                        autoPlay
                        muted
                        playsInline // for mobile devices
                        preload="auto"  // preload the video for better performance
                    >

                        <source src="/static/badgeAnim.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}