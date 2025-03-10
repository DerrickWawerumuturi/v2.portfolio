'use client'
import React, {useRef, useEffect} from 'react'
import gsap from "gsap"

const AnimatedTitle = ({ title, containerClass}: {title: string, containerClass: string}) => {

    const containerRef = useRef<HTMLDivElement>(null); // helps gsap target the correct element for animation


    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse"
                }
            })

            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power1.inOut",
                stagger: 0.02
            }, 0)
        }, containerRef)

        return () => ctx.revert()
    }, []);

        return (
        <div ref={containerRef} className={`animated-subtitle ${containerClass}`}>
            {title.split("<br />").map((line, index) => (
                <div key={index} className={"flex-center max-w-full flex-wrap gap-2 md:gap-3"}>
                    {line.split("*").map((word, idx) => (
                        <span key={idx} className={"animated-word"}  dangerouslySetInnerHTML={{__html: word}}/>
                    ))}
                </div>
                ))}
        </div>
    )
}

export default AnimatedTitle


/* Transform */

// translate3d(x, y, z) → Moves the element in 3D space.
//
//     x = 0 → No movement left or right.
//     y = 0 → No movement up or down.
//     z = 0 → No movement forward or backward.
// (If you used translate3d(50px, 0, 0), it would move 50px to the right.)
// rotateY(0deg) → No rotation on the Y-axis (horizontal rotation).
//
// (If you used rotateY(180deg), it would flip around horizontally.)
// rotateX(0deg) → No rotation on the X-axis (vertical rotation).
//
// (If you used rotateX(90deg), it would tilt forwards/backwards.)