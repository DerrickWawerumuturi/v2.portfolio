'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from "react-use"
import gsap from 'gsap'

const navItems = ["Home", "About", "Projects", "Contacts"]

const Navbar = () => {
    const navContainerRef = useRef(null)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)

    const { y: currentScrollY } = useWindowScroll()

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(false)
            // @ts-ignore
            navContainerRef.current?.classList.remove('floating-nav')
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false) // Hide navbar on scroll down
            // @ts-ignore
            navContainerRef.current?.classList.add("floating-nav")
        } else {
            setIsNavVisible(true) // Show navbar on scroll up
            // @ts-ignore
            navContainerRef.current?.classList.remove("floating-nav")
        }

        setLastScrollY(currentScrollY)
    }, [currentScrollY])

    useEffect(() => {
        if (!navContainerRef.current) return

        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.3,
            ease: "power2.out"
        })
    }, [isNavVisible])

    return (
        <div
            ref={navContainerRef}
            className="hidden fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 md:flex justify-center"
        >
            <nav className="flex sm:space-x-11 md:w-[500px] lg:w-[700px] items-center md:space-x-24 lg:space-x-0 lg:justify-between p-4 bg-gray-700 shadow-md rounded-full ">
                <div className="flex items-center gap-7">
                    <img src="/images/icon.png" alt="logo" className="w-10" />
                </div>
                <div className="flex h-full items-center">
                    <div className="sm:flex md:gap-7">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
