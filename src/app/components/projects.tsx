// File: `src/app/components/projects.tsx`
"use client";

import { useState } from 'react';
import Link from "next/link";

interface Slide {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    link: string;
    video?: string;
}

const slides: Slide[] = [
    { id: 1, img: "/static/mockup1.png", title: "Virtual gallery", subtitle: "2025", link: "/myprojects/project1", video: "/static/hover1.mp4" },
    { id: 2, img: "/static/trialmockup.png", title: "Belco Alliance website", subtitle: "2025", link: "/myprojects/project2" },
    { id: 3, img: "/static/trialmockup.png", title: "SheLab", subtitle: "2024", link: "/myprojects/project3" }
];

export default function ProjectsSection() {
    const [current, setCurrent] = useState(0);

    const nextIndex = (current + 1) % slides.length;
    const prevIndex = (current - 1 + slides.length) % slides.length;

    const getSlideState = (index: number) => {
        if (index === current) return 'center';
        if (index === nextIndex) return 'next';
        if (index === prevIndex) return 'prev';
        return undefined;
    };

    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
         const video = e.currentTarget.querySelector('video');
            if (video) {
                 video.play();
            }
    };

    const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.load();
        }

    };

    return (
        <section id="projects" className="section-background flex flex-col">
            <h2 className=" projects-header font-[Fasdeco]">My Projects</h2>
            <div className="sliderContainer">
                <div className="slider">
                    <button className="btn prev" onClick={handlePrev} aria-label="previous">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="stack">
                        {slides.map((slide, index) => {
                            const state = getSlideState(index);
                             if (!state) return null;
                            return (
                                <div key={slide.id} className="card" data-state={state} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                                    <Link href={slide.link}  >
                                        {slide.video ? (
                                            <video
                                                muted
                                                loop
                                                preload="auto"
                                                poster={slide.img}
                                                className="absolute w-full h-full object-cover"
                                                >
                                                <source src={slide.video} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <img src={slide.img} alt={slide.title} />
                                        )}
                                    </Link>
                                </div>
                            );
                        })}

                        {slides.map((slide, index) => {
                            const state = getSlideState(index);
                            if (!state) return null;
                            return (
                                <div key={`info-${slide.id}`} className="info" data-state={state}>
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.subtitle}</h2>
                                </div>
                            );
                        })}
                    </div>

                    <button className="btn next" onClick={handleNext} aria-label="next">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}