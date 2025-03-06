'use client'
import React, {useEffect, useRef} from 'react'
import gsap from "gsap";

const AnimatedTitle = ({ title, containerClass}: {title: string, containerClass: string}) => {

    const containerRef = useRef<HTMLDivElement>(null); // helps gsap target the correct element for animation

    useEffect(() => {
        //  gsap.context limits the effect to the title only
        const ctx = gsap.context(() => {
            // running animation on mount
            const titleAnimation = gsap.timeline({
                // scrollTrigger makes it run when the element enters the screen
                scrollTrigger: {
                    trigger: containerRef.current, // when the containerRef enters the screen
                    start: "100 bottom", // animation starts when 100px from the bottom of the viewpoint
                    end: "center bottom", // animation ends when center of element reaches bottom
                    toggleActions: "play none none reverse" // controls what happens when you scroll in and out of the trigger area:
                    // on Enter(scrolling in): play/start animation
                    // onLeave (scrolling past the end) : Do nothing
                    // onEnter Back(scrolling back up): Do nothing
                    // on Leave Back (scrolling out): play animation in reverse
                }
            })

            // actual animation
            titleAnimation.to(".animated-word", { // animates all elements within the class .animated-word
                opacity: 1, // makes word visible
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", //moves element in 3D space (more on the last lines)
                ease: "power1.inOut",
                stagger:0.02 // makes each word delay by 0.02 sec before animating the next
            }, 0)

        }, containerRef)
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