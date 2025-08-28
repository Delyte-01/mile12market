import { Category, Product } from "@/lib/types";


export const categories: Category[] = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    icon: "Apple",
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 45,
  },
  {
    id: "vegetables",
    name: "Vegetables",
    icon: "Carrot",
    image:
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 67,
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    icon: "Milk",
    image:
      "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 28,
  },
  {
    id: "meat",
    name: "Meat & Poultry",
    icon: "Beef",
    image:
      "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 34,
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: "Croissant",
    image:
      "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 52,
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: "Coffee",
    image:
      "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400",
    productCount: 38,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Bananas",
    price: 2.99,
    originalPrice: 3.49,
    category: "fruits",
    image:
      "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 124,
    description:
      "Fresh organic bananas, perfect for snacking or smoothies. Rich in potassium and natural sugars.",
    nutritionFacts: {
      calories: 105,
      protein: "1.3g",
      carbs: "27g",
      fat: "0.4g",
      fiber: "3.1g",
      sodium: "1mg",
    },
    inStock: true,
    stockCount: 150,
    tags: ["organic", "fresh", "vitamin-rich"],
    relatedProducts: ["2", "3", "4"],
  },
  {
    id: "2",
    name: "Fresh Strawberries",
    price: 4.99,
    category: "fruits",
    image:
      "https://images.pexels.com/photos/89778/strawberries-frisch-red-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 89,
    description:
      "Sweet, juicy strawberries packed with vitamin C and antioxidants. Perfect for desserts or eating fresh.",
    nutritionFacts: {
      calories: 32,
      protein: "0.7g",
      carbs: "7.7g",
      fat: "0.3g",
      fiber: "2g",
      sodium: "1mg",
    },
    inStock: true,
    stockCount: 75,
    tags: ["fresh", "vitamin-c", "antioxidants"],
    relatedProducts: ["1", "3", "5"],
  },
  {
    id: "3",
    name: "Organic Spinach",
    price: 3.49,
    category: "vegetables",
    image:
      "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.3,
    reviews: 67,
    description:
      "Fresh organic baby spinach leaves, perfect for salads or cooking. High in iron and vitamins.",
    nutritionFacts: {
      calories: 23,
      protein: "2.9g",
      carbs: "3.6g",
      fat: "0.4g",
      fiber: "2.2g",
      sodium: "79mg",
    },
    inStock: true,
    stockCount: 85,
    tags: ["organic", "leafy-greens", "iron-rich"],
    relatedProducts: ["4", "6", "7"],
  },
  {
    id: "4",
    name: "Whole Milk",
    price: 3.99,
    category: "dairy",
    image:
      "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 156,
    description:
      "Fresh whole milk from local farms. Rich in calcium, protein, and essential vitamins.",
    nutritionFacts: {
      calories: 150,
      protein: "8g",
      carbs: "12g",
      fat: "8g",
      fiber: "0g",
      sodium: "105mg",
    },
    inStock: true,
    stockCount: 120,
    tags: ["fresh", "calcium-rich", "protein"],
    relatedProducts: ["5", "8", "9"],
  },
  {
    id: "5",
    name: "Artisan Sourdough Bread",
    price: 5.49,
    category: "bakery",
    image:
      "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 203,
    description:
      "Handcrafted sourdough bread with a perfect crust and tender crumb. Made with traditional methods.",
    nutritionFacts: {
      calories: 80,
      protein: "3g",
      carbs: "15g",
      fat: "1g",
      fiber: "1g",
      sodium: "170mg",
    },
    inStock: true,
    stockCount: 40,
    tags: ["artisan", "handmade", "traditional"],
    relatedProducts: ["6", "7", "10"],
  },
  {
    id: "6",
    name: "Premium Ground Coffee",
    price: 12.99,
    category: "beverages",
    image:
      "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 342,
    description:
      "Medium roast ground coffee with rich flavor and aromatic notes. Perfect for your morning brew.",
    nutritionFacts: {
      calories: 2,
      protein: "0.3g",
      carbs: "0g",
      fat: "0g",
      fiber: "0g",
      sodium: "5mg",
    },
    inStock: true,
    stockCount: 95,
    tags: ["premium", "medium-roast", "aromatic"],
    relatedProducts: ["7", "8", "11"],
  },
];
