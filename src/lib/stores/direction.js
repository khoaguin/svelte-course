import {derived} from "svelte/store";
import settings from "./settings";
import location from "./location";

const direction = derived(
    [settings, location],
    ([$settings, $location], set) => {
        const timer = setTimeout(() => {  // simulate asynchronous update
            set($settings.language == 'en' ? 'ltr' : 'rtl');
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    },
    'not dicided'
);

export default direction;