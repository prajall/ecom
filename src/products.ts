interface product {
  id: string;
  name: string;
  underText: string;
  price: number;
  image: string;
  category: string[];
}
interface products {
  products: product[];
}

const dummyProducts: product[] = [
  {
    id: "6",
    name: "Gorgeous Green Onepiece",
    underText: "Random Under text for testing",
    image: "women1.jpeg",
    price: 2100,
    category: ["Onepieces", "women"],
  },
  {
    id: "5",
    name: "Nike Brown Sports Shoes",
    underText: "Random Under text for testing",
    image: "shoes2.jpg",
    price: 3000,
    category: ["shoes", "sports", "mens"],
  },
  {
    id: "1",
    name: "Plain drop shoulder black Tshirt",
    underText: "Made from pure cotton",
    image: "tshirt1.jpeg",
    price: 500,
    category: ["t-shirts", "mens", "women"],
  },
  {
    id: "2",
    name: "Mens Grey Formal/Casual pant",
    underText: "Formal or Casual pant",
    image: "pant1.jpg",
    price: 1100,
    category: ["pants", "mens"],
  },

  {
    id: "7",
    name: "Blue Onepiece for women",
    underText: "Random Under text for testing",
    image: "women3.jpg",
    price: 1800,
    category: ["women"],
  },
  {
    id: "4",
    name: "Nike Grey Sports Shoes",
    underText: "Random Under text for testing",
    image: "shoes1.jpeg",
    price: 3000,
    category: ["shoes", "sports", "mens"],
  },

  {
    id: "6",
    name: "Gorgeous Red Onepiece",
    underText: "Random Under text for testing",
    image: "women2.jpg",
    price: 2100,
    category: ["Onepieces", "women"],
  },

  {
    id: "8",
    name: "Red T-shirt for men",
    underText: "Random Under text for testing",
    image: "tshirt3.jpg",
    price: 700,
    category: ["t-shirts", "mens"],
  },
  {
    id: "3",
    name: "Mens Dark trouser",
    underText: "Nylon pant fitting size",
    image: "pant2.jpg",
    price: 1050,
    category: ["pants", "trousers", "mens"],
  },
];

export default dummyProducts;
