function DogDetails (name,lifespan,size,temperament,exercise,coat,good,image) {
    this.name = name,
    this.lifespan = lifespan,
    this.size = size,
    this.temperament = temperament,
    this.exercise = exercise,
    this.coat=coat,
    this.good=good,
    this.image=image
}

export const dogArray = [
    new DogDetails("Golden Retriever",
        "10-12 years",
        "Medium to Large (55-75 lbs)",
        "Friendly, intelligent, and affectionate",
        "High; loves outdoor activities and swimming",
        "Long, thick, and requires regular grooming",
        "Families, therapy work, and active owners",
        "goldretriever.jpg"),

    new DogDetails("Pomeranian",
        "12-16 years",
        "Small (3-7 lbs)",
        "Playful, alert, and confident",
        "Low to moderate; enjoys short walks and playtime",
        "Fluffy double coat, requires regular brushing",
        "Apartment living, companionship, and first-time dog owners",
        "pomerian.jpg"),

    new DogDetails("Beagle",
        "12-15 years",
        "Small to Medium (20-30 lbs)",
        "Curious, friendly, and energetic",
        "High; loves to sniff and explore",
        "Short and low-maintenance",
        "Active families, scent work, and outdoor adventures",
        "beagle.jpg"),

    new DogDetails("Shih Tzu",
        "10-16 years",
        "Small (9-16 lbs)",
        "Affectionate, friendly, and calm",
        "Low to moderate; enjoys short walks",
        "Long, silky coat that needs daily grooming",
        "Apartment living, seniors, and lap dog lovers",
        "shihTzu.jpg")
]