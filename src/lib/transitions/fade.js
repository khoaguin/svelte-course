import { cubicInOut } from "svelte/easing";

export default function fade(node, {delay=0, duration=400, easing=cubicInOut}) {
    const originalOpacity = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        tick: (t) => {  // t ∈ [0, 1] and represents the time of our animation after the easing function
            node.style.opacity = t * originalOpacity;
        }
    }
}