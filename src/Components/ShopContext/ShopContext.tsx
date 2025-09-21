import React, { createContext, useState, useEffect } from "react";

// Define the shape of a single cart item
export type CartItem = {
id: number;
name: string;
size: string;
quantity: number;
price: number;
images: string[];
};

// Define the shape of the context's state and functions
type ShopContextType = {
cart: CartItem[];
addToCart: (product: CartItem) => void;
removeFromCart: (id: number, price: number) => void;
increaseQuantity: (id: number, price: number) => void;
decreaseQuantity: (id: number, price: number) => void;
};

// Create the context
export const ShopContext = createContext<ShopContextType | undefined>(
undefined
);

// Define the provider component
export const ShopProvider = ({
children,
}: {
children: React.ReactNode;
}) => {
// Load cart from local storage on initial state
const [cart, setCart] = useState<CartItem[]>(() => {
const savedCart = localStorage.getItem("cart");
return savedCart ? JSON.parse(savedCart) : [];
});

// Save cart to local storage whenever it changes
useEffect(() => {
localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

// Function to add a product to the cart
const addToCart = (product: CartItem) => {
// Find if an item with the SAME ID AND SAME PRICE already exists
const existing = cart.find(
(item) => item.id === product.id && item.price === product.price
);

if (existing) {
// If the item exists, create a new array with the quantity increased
setCart(
cart.map((item) =>
item.id === product.id && item.price === product.price
? { ...item, quantity: item.quantity + 1 }
: item
)
);
} else {
// If the item does not exist, add it to the cart with a quantity of 1
setCart([...cart, { ...product, quantity: 1 }]);
}
};

// Function to remove a product from the cart
const removeFromCart = (id: number, price: number) => {
// Filter out the item that matches both the id and the price
setCart(
cart.filter((item) => !(item.id === id && item.price === price))
);
};

// Function to increase the quantity of a specific item
const increaseQuantity = (id: number, price: number) => {
setCart(
cart.map((item) =>
item.id === id && item.price === price
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

// Function to decrease the quantity of a specific item
const decreaseQuantity = (id: number, price: number) => {
// Create a new array, decreasing the quantity of the matched item
const updatedCart = cart.map((item) =>
item.id === id && item.price === price
? { ...item, quantity: item.quantity - 1 }
: item
);

// Filter out any items whose quantity is now 0 or less
setCart(updatedCart.filter((item) => item.quantity > 0));
};

// Define the value to be passed to components
const contextValue = {
cart,
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
};

return (
<ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
);
};