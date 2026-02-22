import { clearCart, removeItem } from "../utils/cartSlice";
import AccordionItemList from "./AccordionItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart =()=>{
    dispatch(clearCart())
  }

  return (
    <>
      <div className="text-center mt-40 p-4 shadow-lg">
        <div className="text-2xl font-bold">Cart</div>
        <div className="w-6/12 m-auto items-start text-left">
          <button
            className="bg-red-600 m-2 px-4 py-2 rounded-lg shadow-md text-white hover:bg-red-700 hover:scale-105 transition transform duration-200"

            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 ? <div> No items added</div>:
          <AccordionItemList items={cartItems} />}
        </div>
      </div>
    </>
  );
};

export default Cart;
