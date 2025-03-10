'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";

const TableOfContent = () => {
    const [active, setActive] = useState("")

    const increaseLength = 'w-36 bg-white'



    return (
        <div className={"flex flex-col space-y-4 text-gray-400 mt-24 fade-in"}>
            {["about", "projects", "contact"].map((item) => (
                <div key={item} onClick={() => setActive(item)}>
                    <Link key={item} href={`#${item}`}>
                        <div className={"flex items-center space-x-2 cursor-pointer group"}>
                        <span
                            className={`h-0.5 w-8 transition-all duration-300 bg-gray-500 scale-x-105
                        ${active === item && increaseLength}
                        `}
                        />

                            <span
                                className={`text-sm uppercase tracking-wider font-semibold transition-colors
                        duration-300 ${active === item ? "text-white" : "group-hover:text-gray-300"}`}
                            >
                            {item}
                        </span>
                        </div>
                    </Link>
                </div>
                    ))}
                </div>
            )
            }
            export default TableOfContent
