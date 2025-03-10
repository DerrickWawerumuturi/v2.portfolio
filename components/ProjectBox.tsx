'use client'

import React from 'react'
import Image from "next/image";
import {FaGithub} from "react-icons/fa";
import {GoLinkExternal} from "react-icons/go";


interface ProjectBoxProps {
    title: string,
    description: string,
    skills: string[],
    github: string,
    website: string,
    cover: string,
}

const ProjectBox = ({
    title,
    description,
    skills,
    github,
    website,
    cover
}: ProjectBoxProps) => {

    const handleOnClick = (website: string) => {
        if (website) {
            window.open(website, "_blank", "noopener,noreferrer");
        }
    }

    return (
        <div
            className={"flex flex-col space-y-4 md:flex-row md:space-x-11 items-center my-7 sm:p-1 md:p-5 hover:border hover:border-gray-800 hover:cursor-pointer lg:max-w-6xl rounded-md transform transition-transform hover:scale-105"}
            onClick={() => handleOnClick(website)}
        >
            {/* preview */}
            <div
                className={"relative w-[300px] h-[200px] lg:-ml-0 "}>
                <Image
                    src={cover}
                    alt={title}
                    style={{ objectFit: "cover" }}
                    fill
                    className={"rounded-md absolute"}
                />
            </div>

             {/*description */}
            <div className={"flex justify-end flex-col space-y-3 max-w-[500px]"}>
                <h2 className={"text-white font-bold text-lg flex space-x-4 hover:text-violet-300"}>
                    {title}
                    <span className={"mt-1 ml-3"}>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <GoLinkExternal/>
                        </a>
                    </span>
                </h2>

                <p className={"text-gray-400 font-semibold sm:text-sm lg:text-md"}>{description}</p>

                <ul className={"flex space-x-2 text-gray-400 "}>
                    {skills.map((skill, idx) => (
                        <li className={"text-xs text-white bg-violet-900 rounded-xl p-2"} key={idx}>{skill}</li>
                    ))}
                </ul>

                <div className={"flex items-end justify-end space-x-2"}>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </a>

                </div>
            </div>
        </div>
    )
}
export default ProjectBox
