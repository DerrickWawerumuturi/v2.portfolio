import React from 'react'
import AnimatedTitle from "@/components/AnimatedTitle";
import TableOfContent from "@/components/TableOfContent";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Hero = () => {
    return (
        <div className="p-5 relative border border-white sm:mt-2 md:mt-10 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg  lg:max-w-[1000px] text-white mx-auto">

            {/* borders */}

            {/* Top Left */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white"/>

            {/* Top Right */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-white"/>

            {/* Bottom Left */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-white"/>

            {/* Bottom Right */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white"/>


            {/* content */}
            <div className={"flex flex-col gap-7"}>
                {/* name and title*/}
                <div className={"flex flex-col space-y-3 mt-5"}>
                    <h1 className={"special-font bento-title"}>DERRIC<b>K</b> MUT<b>U</b>RI</h1>
                    <AnimatedTitle
                        title={"<b>W</b>EB DE<b>V</b>ELOPER * A<b>N</b>D <br /> * DE<b>V</b>ELOP<b>E</b>R</p>"}
                        containerClass={"special-font bento-subtitle"}/>
                </div>

                {/* table of content */}
                <TableOfContent/>

                {/* socials */}
                <div className={"mt-36 flex space-x-4"}>
                    <a href="https://github.com/DerrickWawerumuturi" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={"20"} className={"text-2xl transition-transform duration-300 hover:scale-150"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/derrick-muturi"}>
                        <FaLinkedin size={"20"}
                                    className={"text-2xl transition-transform duration-300 hover:scale-150"}/>
                    </a>
                    <a href={"/email"} className={"mb-5"}>
                        <MdEmail size={"25"} className={"text-2xl transition-transform duration-300 hover:scale-150"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero
