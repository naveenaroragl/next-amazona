import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "jane",
      email: "jane@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt2",
      slug: "free-shirt2",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt3",
      slug: "free-shirt3",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Free Shirt4",
      slug: "free-shirt4",
      category: "Shirts",
      image: "/images/shirt4.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
  ],
};

export default data;
