import { useEffect, useReducer } from "react";
import { CartContext, cartReducer } from ".";
import { ICartProduct } from "@/interfaces";
import Cookie from "js-cookie";

export interface CartState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems:0,
  subTotal:0,
  tax:0,
  total:0,
};

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "Cart - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({ type: "Cart - LoadCart from cookies | storage", payload: [] });
    }
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);



  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.quantity * current.price + prev,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const OrderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({ type: "Cart - Update order summary", payload: OrderSummary })
  }, [state.cart]);



  const addProductsToCart = (product: ICartProduct) => {
    if (
      !state.cart.some((p) => p._id === product._id && p.size === product.size)
    ) {
      return dispatch({
        type: "Cart - Add Product",
        payload: [...state.cart, product],
      });
    }

    const updatedProducts = state.cart.map((prod) => {
      if (prod._id === product._id && prod.size === product.size) {
        prod.quantity += product.quantity;
        return prod;
      } else {
        return prod;
      }
    });

    dispatch({ type: "Cart - Add Product", payload: updatedProducts });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "Cart - Update Product Quantiy", payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: "Cart - Remove Product in Cart", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductsToCart,
        updateCartQuantity,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
