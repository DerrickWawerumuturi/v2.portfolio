import React from 'react'
import {Skills} from "@/utils/utils";
import {MdArrowCircleRight} from "react-icons/md";

const About = () => {
    return (
        <div id={'about'} className={"fade-in lg:ml-56 sm:mt-28 lg:mt-64 text-white flex flex-col space-y-11"}>
            <div className={"flex space-x-5 items-center"}>
                <h2 className={"text-xl font-bold mt-14"}>ABOUT</h2>
                <span className={"w-72 bg-gray-600 h-0.5 mt-14 "}/>
            </div>
            <div className={"w-full max-w-[90%] md:max-w-[500px] font-circular-web text-gray-400 text-md"}>
                <p className={"break-words"}>
                     I am a passionate web developer with a strong focus on creating engaging and dynamic digital experiences. With a background in full-stack development and a recent certification in software engineering from <span className={"text-violet-300 font-bold custom-underline"}>ALX</span>,
                    I specialize in building robust web applications and websites using modern technologies like Next.js, Tailwind CSS, Payload CMS, and Supabase.
                </p>

                <p className={"mt-7 break-words"}>
                    In addition to web development, I’m passionate about <span className={"text-violet-300 font-bold custom-underline"}>Machine Learning</span> and
                    continuously expanding my skills in this area. I've completed learning modules on linear regression and classification, and I'm excited to dive deeper into machine learning models and their applications.
                </p>

                <p className={"mt-7 break-words"}>Here are a few technologies I&apos;ve been working with recently:</p>
                <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7"}>
                    {Skills.map((skill, index) => (
                        <li key={index} className={"flex items-center"}>
                            <MdArrowCircleRight className={"mr-2 text-violet-300"}/>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default About
