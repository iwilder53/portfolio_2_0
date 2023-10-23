"use client"
import FileSaver, { saveAs } from "file-saver";

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import EmailSection from "./EmailSection";
import Link from "next/link";
const HeroSection = () => {
    const saveFile = () => {
        saveAs(
            "Resume-Yash-Bagaria.pdf", "Resume.pdf"
        );
    };
    return (
        <section>   <div className="grid grid-cols-1 sm:grid-cols-12 " >
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className=' text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hello, I&apos;m {""}  </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Yash', 1500,
                            // Same substring at the start will only be typed out once, initially
                            'a Web Developer',
                            1500,
                            'a Mobile Developer',
                            1500,
                            'an Embedded Engineer',
                            1500, 'Yash', 1500,


                        ]
                        }
                        wrapper="span"
                        speed={50}
                        repeat={0}
                    /></h1>
                <p className="text-[#ADB7BE] sm:text-lg text-base  lg:text-xl mb-6">
                    &lsquo;There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&rsquo;


                </p>
                <Link href="#contact" className="px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me!</Link>
                <button onClick={saveFile} className="px-1 py-1 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3"><span className="block bg-[#121212] hover:bg-slate-200 rounded-full px-5 py-2">Download CV</span></button>
            </div> <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
                <div className=" rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] relative">
                    <Image src="/images/hero-image.png" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " height={300} width={300}>
                    </Image></div>
            </div></div>
        </section>
    )
}

export default HeroSection