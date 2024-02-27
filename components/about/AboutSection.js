import React from 'react';
import Skills from './Skills';
import Image from "next/image.js";
import alwinImage from "./../../public/img/al1.jpeg";

function AboutSection() {
    return (
        <section className='pt-1' id="about_section">
            <div className="text-3xl text-highlight py-3 text-center">About me </div>
            <div className='w-full h-96 flex justify-centre p-8 text-slate-400'>
                <div className='w-4/12'>
                    <div className="w-56 h-56 border border-slate-200 rounded-tl-3xl rounded-br-3xl mr-12 overflow-hidden">
                        <Image src={alwinImage} alt="Alwin Paul" />

                    </div>
                </div>
                <div className='w-7/12'>
                    <p className="mb-6">
                        I&apos;m passionate about leveraging JavaScript technologies such as React, Vue, and Angular to bring digital visions to life.
                    </p>
                    <p className="mb-6">
                        For me, coding isn&apos;t just a task; it&apos;s a medium for creative expression. The ever-evolving landscape of technology fuels my curiosity, driving me to constantly push boundaries and find innovative solutions to intricate challenges.
                    </p>
                    <p className="mb-6">
                        During my downtime, I draw inspiration from fellow developers&apos; work and dive into experimenting with new technologies.
                    </p>
                    <p className="mb-6">
                        Feel free to reach out and say hello at:{" "}
                        <a
                            href="mailto:alwinpaul47@gmail.com"
                            rel="noreferrer"
                            target="_blank"
                            className="text-green underline font-medium dark:text-mustard"
                        >
                            alwinpaul47@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-6 leading-7">

            </div>
        </section>
    )
}

export default AboutSection