import { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
useContext(ShopContext)!;

// Calculate total price
const totalPrice = cart.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return (
<div className="p-4" style={{margin:"40px 0"}}>
<h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

{cart.length === 0 ? (
<p>No items in cart</p>
) : (
<table className="w-full border-collapse">
<thead>
<tr className="bg-gray-200">
<th className="border p-2">Image</th>
<th className="border p-2">Product</th>
<th className="border p-2">Size</th>
<th className="border p-2">Price</th>
<th className="border p-2">Quantity</th>
<th className="border p-2">Total</th>
<th className="border p-2">Action</th>
</tr>
</thead>
<tbody>
{cart.map((item) => (
<tr key={`${item.id}-${item.size}`} className="text-center">
<td className="border p-2">
<img
src={item.images[0]}
alt={item.name}
className="w-16 h-16 object-cover mx-auto"
style={{margin:"auto"}}
/>
</td>
<td className="border p-2">{item.name}</td>
<td className="border p-2">{item.size}</td>
<td className="border p-2">₦ {item.price}</td>
<td className="border p-2">
<div className="flex items-center justify-center gap-2">
<button
onClick={() => decreaseQuantity(item.id, item.size)}
className="px-2 py-1 bg-gray-300"
style={{padding:"7px"}}
>
-
</button>
<span>{item.quantity}</span>
<button
onClick={() => increaseQuantity(item.id, item.size)}
className="px-2 py-1 bg-gray-300"
style={{padding:"7px"}}
>
+
</button>
</div>
</td>
<td className="border p-2">
₦ {(item.price * item.quantity).toFixed(2)}
</td>
<td className="border p-2">
<AiOutlineDelete onClick={() => removeFromCart(item.id, item.size)} 
  style={{cursor:"pointer", fontSize:"14px", color:"red", margin:"auto"}}
  />
</td>
</tr>
))}
</tbody>
</table>
)}

{cart.length > 0 && (
<div className="mt-4 text-right">
<h3 className="text-lg font-semibold">
Grand Total: ₦{totalPrice.toFixed(2)}
</h3>
</div>
)}

<div style={{display:"flex",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center",
  }}>
  <button
style={{
  backgroundColor:"black", 
  color:"white",
  padding:"8px",
  borderRadius:"5px",
  fontWeight:"bold",
  cursor:"pointer"
  }}
>PROCEED TO CHECKOUT</button>
</div>

</div>
);
};

export default Cart;