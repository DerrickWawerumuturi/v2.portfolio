import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Contacts = () => {
    return (
        <div id={"contact"} className={"fade-in lg:ml-56 sm:mt-28 lg:mt-64  text-white flex flex-col space-y-11"}>
            <div className={"flex space-x-5 items-center"}>
                <h2 className={"text-xl font-bold"}>Get in Touch</h2>
                <span className={"w-72 bg-gray-600 h-0.5"}/>
            </div>
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
    )
}

export default Contacts
