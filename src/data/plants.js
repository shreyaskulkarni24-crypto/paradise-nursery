import peaceLily from "../assets/images/peace_lily.webp";
import jasmine from "../assets/images/jasmine.webp";


export const plantCategories = [
  {
    id: "air-purifying",
    name: "Air Purifying Plants",
    emoji: "🌿",
    plants: [
      {
        id: 1,
        name: "Peace Lily",
        price: 12.99,
        image: peaceLily,
        description: "Elegant white blooms, thrives in low light and removes toxins from the air effortlessly.",
        category: "air-purifying",
      },
      {
        id: 2,
        name: "Spider Plant",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80",
        description: "Resilient and fast-growing, perfect for beginners. Cascading green and white leaves.",
        category: "air-purifying",
      },
      {
        id: 3,
        name: "Snake Plant",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400&q=80",
        description: "Nearly indestructible, converts CO₂ to oxygen at night. A bedroom staple.",
        category: "air-purifying",
      },
    ],
  },
  {
    id: "aromatic",
    name: "Aromatic Plants",
    emoji: "🌸",
    plants: [
      {
        id: 4,
        name: "Lavender",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&q=80",
        description: "Calming purple blooms with a soothing scent. Promotes relaxation and better sleep.",
        category: "aromatic",
      },
      {
        id: 5,
        name: "Jasmine",
        price: 13.99,
        image: jasmine,
        description: "Intoxicating floral fragrance fills the room. Delicate white blossoms year-round.",
        category: "aromatic",
      },
      {
        id: 6,
        name: "Mint",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80",
        description: "Fresh and invigorating, perfect for teas and cooking. Grows abundantly indoors.",
        category: "aromatic",
      },
    ],
  },
  {
    id: "low-maintenance",
    name: "Low Maintenance Plants",
    emoji: "🌵",
    plants: [
      {
        id: 7,
        name: "Pothos",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&q=80",
        description: "The ultimate survivor plant. Tolerates neglect, low light, and irregular watering.",
        category: "low-maintenance",
      },
      {
        id: 8,
        name: "ZZ Plant",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80",
        description: "Glossy, waxy leaves that shine beautifully. Survives months without water.",
        category: "low-maintenance",
      },
      {
        id: 9,
        name: "Aloe Vera",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80",
        description: "Medicinal succulent with gel that soothes burns and skin irritation. Needs minimal care.",
        category: "low-maintenance",
      },
    ],
  },
];