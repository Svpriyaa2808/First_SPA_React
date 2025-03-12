export const catImageUrl = image => {
    return new URL(`../assets/${image}`,import.meta.url).href;
}