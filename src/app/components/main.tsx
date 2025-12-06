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
            className="relative flex justify-center items-center min-h-screen w-full mx-auto max-w-none pt-32 pb-20">
            {/* decorative background spot - non-interactive and behind content */}
            <div className="bg-spot" aria-hidden="true" />
            {/* max-w-none - allows the section to span the full width of the viewport */}
            {/* pt - padding-top */}
            {/* pb - padding-bottom */}

            <div id="main-text">
                <div id="sub-main">
                    <h1 id="header-main" className="leading-tight font-[Fasdeco] ">hello</h1>
                    <h1 id="kristiyana-line" className="leading-tight font-[Fasdeco]">KrIstIyNA</h1>
                </div>

                <h1 id="im-line" className="leading-tight font-[Fasdeco]">I'M</h1>
            </div>

            <div id="badge-unit" className="animation"
                 onAnimationEnd={() => {
                     videoRef.current?.play();
                 }}
            >
                <div id="badgestring" className="font-[Fasdeco]">PORTFOLIO</div>
                <div className="w-full max-w-none md:w-[96%] lg:w-[99%] overflow-hidden shadow-2xl h-[68vh] md:h-[85vh] lg:h-[94vh] ">
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