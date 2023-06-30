import { readable } from "svelte/store";

const location = readable(null, (set) => {
    let watchId;
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                set({latitude, longitude});
            },
            (err) => {
                set({err});
            }
        );
    }
    return () => {
        navigator.geolocation.clearWatch(watchId);
        set(null);
    }
});

export default location;