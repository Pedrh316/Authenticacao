export const useRedirect = (route, time) => {
    setTimeout(() => {
        window.location.pathname = route;
    },time)
}