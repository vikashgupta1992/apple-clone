import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);



export const aminateWithGsapTimeline = (timeline, rRef, rState, fT, sT, animProps) => {
    timeline.to(rRef.current.rotation, {
        y: rState,
        duration: 1,
        ease: 'power2.inOut',
    })

    timeline.to(fT, {
        ...animProps,
        ease: 'power2.inOut',
    },
    '<'
    )

    timeline.to(sT, {
            ...animProps,
            ease: 'power2.inOut',
        },
        '<'
    )
}

export const animateWithGsap = (target, animProps, scrollProps) => {
    gsap.to(target, {
        ...animProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: "restart reverse restart reverse",
            start: 'top 85%',
            ...scrollProps
        },
    })
}