import React from 'react'
import ProjectBox from "@/components/ProjectBox";
import {websites} from "@/utils/utils";

const Projects = () => {
    return (
        <div id={"projects"} className={"fade-in lg:ml-56 sm:mt-28 lg:mt-36 text-white flex flex-col space-y-11 min-h-screen"}>
            <div className={"flex space-x-5 items-center"}>
                <h2 className={"text-xl font-bold mt-14"}>Some Things I&apos;ve Built</h2>
                <span className={"w-72 bg-gray-600 h-0.5 mt-14"}/>
            </div>
            <div className={"grid sm:grid-cols-1 gap-3 mt-3"}>
                {websites.map((website, idx) => (
                    <ProjectBox title={website.title} description={website.desc} skills={website.skills} github={website.github} website={website.website} cover={website.cover} key={idx}/>
                ))}
            </div>
        </div>
    )
}
export default Projects
