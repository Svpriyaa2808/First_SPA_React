export const catImageUrl = image => {
    return new URL(`../assets/${image}`,import.meta.url).href;
}

export const DogImageUrl = image => {
    return new URL(`../assets/${image}`,import.meta.url).href;
}