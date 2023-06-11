import {cubicInOut} from "svelte/easing";


export default function spin(node, {delay = 0, duration = 400, easing = cubicInOut, spin = 1}) {
    // node: the DOM node to apply the transition to

    const originalOpacity = +getComputedStyle(node).opacity;
    const originalTransform = getComputedStyle(node).transform.replace('none', '');
    return {
        delay, 
        duration, 
        easing,
        css: (t) => {  // t ∈ [0, 1] and represents the time of our animation after the easing function
            return `
                opacity: ${t * originalOpacity};
                transform: ${originalTransform} scale(${t}) rotate(${spin * 360 * t}deg)
            `
        }
    }
}