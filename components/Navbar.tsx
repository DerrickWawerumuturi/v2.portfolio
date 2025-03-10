'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from "react-use"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Menu} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const navItems = ["Home", "About", "Projects", "Contacts"]

const Navbar = () => {
    const navContainerRef  = useRef(null)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [_, setHasMounted] = useState(false);
    const {y: currentScrollY} = useWindowScroll()


    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true)
            // @ts-expect-error current is not null
            navContainerRef.current.classList.remove('floating-nav')
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false)
            // @ts-expect-error current is not null
            navContainerRef.current.classList.add("floating-nav")
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true)
            // @ts-expect-error current is not null
            navContainerRef.current.classList.add("floating-nav")
        }
        setLastScrollY(currentScrollY)

    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1: 0,
            duration: 0.2
        })
    }, [isNavVisible])

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div
            ref={navContainerRef}
            className={"fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 lg:max-w-[400px] lg:flex lg:items-center lg:mx-auto"}>
            <header className={"absolute top-1/2 w-full -translate-y-1/2"}/>
            <nav className={"flex size-full items-center justify-between p-4"}>
                <div
                    className={`flex items-left gap-7 `}
                >
                    <Image
                        src="/images/icon.png"
                        alt="logo"
                        className={`object-contain ${currentScrollY === 0 ? "hidden": ""}`}
                        width={26}
                        height={26}
                    />
                </div>
                <div className="hidden md:flex h-full items-center">
                    <div className="sm:flex md:gap-7">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

            {/* mobile nav */}
                <div className={"flex md:hidden"}>
                    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                        <DropdownMenuTrigger
                            onMouseEnter={() => setIsOpen(true)}
                            className={'outline-none cursor-pointer'}
                        >
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side={"bottom"}
                            align={"end"}
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                            className={"bg-gray-700 text-white border-none"}
                        >
                            <div className={"flex flex-col space-y-3 p-3"}>
                                {navItems.map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
