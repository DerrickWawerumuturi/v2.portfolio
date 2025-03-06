'use client'
import React, {useState} from 'react'
import {experiences} from "@/utils/utils";
import {Button} from "@/components/ui/button";

const Resume = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleClick = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category)
    }


    return (
        <div className={"fade-in lg:ml-56 sm:mt-28 lg:mt-64  text-white flex flex-col space-y-11"}>
            <div className={"flex space-x-5 items-center"}>
                <h2 className={"text-xl font-bold"}>Resume</h2>
                <span className={"w-72 bg-gray-600 h-0.5"}/>
            </div>
            <div className={"flex flex-col space-y-6 text-white"}>

                {experiences.map((section, index) => (
                    <div key={index} className={"relative"}>
                        <Button
                            variant={"resume"}
                            className={"rounded-none"}
                            onClick={() => handleClick(section.category)}
                        >
                            {section.category}
                        </Button>


                        {activeCategory === section.category && (
                            <div className={"ml-4 mt-2"}>
                                <div className={"relative"}>
                                    <div className={"ml-10 absolute -top-2 -left-4 w-4 h-4 border-l-2 border-b-2 border-violet-400"}/>
                                </div>

                                <ul className={"pl-14 space-y-6"}>
                                    {section.items.map((item, index) => (
                                        <li key={index} className={"text-gray-300"}>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel={"noopener noreferrer"}
                                                className={"text-violet-400 hover:underline"}
                                            >

                                                {/*{section.category === "Education" ? item?.university : item?.name}*/}
                                            </a>
                                            <p className={"text-sm"}>

                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Resume
