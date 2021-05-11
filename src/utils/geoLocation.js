export function geoLocation(callback) {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(callback);
}