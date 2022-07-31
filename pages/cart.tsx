import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { PlusIcon, ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import Subscribe from "../components/Subscribe";
import Foot from "../components/Foot";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";

const Cart: React.FC = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="h-screen">
      <div className="text-center py-4">
        <h2 className="text-2xl">My Cart</h2>
        <hr></hr>
      </div>

      <Link href="/shop">
        <div className="flex cursor-pointer  items-center">
          <ChevronDoubleLeftIcon width={30} />
          <span className="my-2 hover:underline  hover:decoration-[blue]">
            Store
          </span>
        </div>
      </Link>

      <div className="w-full h-screen overflow-auto  flex flex-col  items-center">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <h1 className="mb-6 text-2xl">You have nothing in your cart!</h1>
            <Link href="/shop">
              <p className="cursor-pointer hover:border-b-2 border-[blue]">
                Continue Shopping
              </p>
            </Link>
          </div>
        ) : (
          <>
            <div className="w-11/12 lg:w-6/12 mx-auto ">
              <div className="flex flex-col mt-6">
                {cart.map((item) => (
                  <div key={item.id}>
                    <hr className="py-2"></hr>
                    <div className="flex flex-col lg:flex-row" key={item.id}>
                      <div className="w-11/12 lg:w-2/12 mx-4 mb-4">
                        <div className="border-2  flex flex-col justify-center items-center py-4">
                          <img src={item.image} height="90" width="65" />
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:w-6/12 lg:ml-[4rem]">
                        <p>{item.title}</p>
                        <p className="font-bold">$ {item.price}</p>

                        <div className="flex flex-row lg:hidden gap-3">
                          <h3>Quantity: &nbsp; &nbsp; &nbsp;</h3>
                          <p>{item.quantity}</p>
                          <div
                            className="cursor-pointer  ml-[15rem]  lg:flex w-2/12 lg:pl-[3rem]"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            x
                          </div>
                        </div>
                      </div>

                      <div
                        className="cursor-pointer hidden lg:flex w-2/12 pl-[3rem]"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        x
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                ))}
              </div>
              <hr></hr>
            </div>
          </>
        )}
        <button className="bg-[blue] bottom flex items-center justify-center text-white p-4 px-6 mt-[5rem]">
          <p>Checkout (Grand Total: ${getTotalPrice()}</p>
        </button>
      </div>
      <Subscribe />
      <Foot />
    </div>
  );
};

export default Cart;
