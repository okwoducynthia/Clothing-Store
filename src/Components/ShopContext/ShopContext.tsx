import React, { createContext, useState, useEffect } from "react";

type CartItem = {
id: number;
name: string;
size: string;
quantity: number;
price: number;
images: string[];
};

type ShopContextType = {
cart: CartItem[];
addToCart: (product: CartItem) => void;
removeFromCart: (id: number, size: string) => void;
increaseQuantity: (id: number, size: string) => void;
decreaseQuantity: (id: number, size: string) => void;
};

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
// ✅ Load cart from localStorage on init
const [cart, setCart] = useState<CartItem[]>(() => {
const savedCart = localStorage.getItem("cart");
return savedCart ? JSON.parse(savedCart) : [];
});

// ✅ Save cart to localStorage whenever it changes
useEffect(() => {
localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (product: CartItem) => {
const existing = cart.find(
(item) => item.id === product.id && item.size === product.size
);

if (existing) {
setCart(
cart.map((item) =>
item.id === product.id && item.size === product.size
? { ...item, quantity: item.quantity + 1 }
: item
)
);
} else {
setCart([...cart, { ...product, quantity: 1 }]);
}
};

const removeFromCart = (id: number, size: string) => {
setCart(cart.filter((item) => !(item.id === id && item.size === size)));
};

const increaseQuantity = (id: number, size: string) => {
setCart(
cart.map((item) =>
item.id === id && item.size === size
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

const decreaseQuantity = (id: number, size: string) => {
setCart(
cart
.map((item) =>
item.id === id && item.size === size
? { ...item, quantity: item.quantity - 1 }
: item
)
.filter((item) => item.quantity > 0)
);
};

return (
<ShopContext.Provider
value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
>
{children}
</ShopContext.Provider>
);
};