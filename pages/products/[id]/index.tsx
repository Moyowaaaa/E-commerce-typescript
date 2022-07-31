import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Subscribe from "../../../components/Subscribe";
import Footer from "../../../components/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";
import useFetch from "../../../utils/useFetch";
import {
  PlusIcon,
  ChevronDoubleLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";

const Product: NextPage = () => {
  const router = useRouter();

  const [productInfo, setProductInfo] = useState<boolean>(false);
  const [returnPolicy, setReturnPolicy] = useState<boolean>();
  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { data } = useFetch({
    url: `https://fakestoreapi.com/products/${router.query.id}`,
  });

  console.log("data", data);

  const item = data;

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any[], item: any[]) => accumulator + item.quantity,
      0
    );
  };

  useEffect(() => {
    setLoader(false);
  });

  console.log("id", router.query.id);

  return (
    <div className="h-[auto]">
      <div className="flex justify-between items-center pr-6">
        <Link href="/shop">
          <div className="flex flex-row cursor-pointer ml-4 lg:ml-6">
            <ChevronDoubleLeftIcon width={30} />
            <span className="my-2">Back</span>
          </div>
        </Link>

        <Link href="/cart">
          <div className="flex items-center lg:hidden ">
            <ShoppingCartIcon width={20} />
          </div>
        </Link>
      </div>

      <div className="flex w-10/12 lg:w-6/12 mx-auto cursor-pointer">
        <Link href="/">
          <span className="hover:border-b border-[blue]">Home/</span>
        </Link>
        <Link href="/shop">
          <span className="hover:border-b border-[blue]">Store</span>
        </Link>
        /
        <span className="font-thin hover:border-b border-[blue]">
          {data?.title}
        </span>
        <Link href="/cart">
          <ShoppingCartIcon
            width={20}
            height={30}
            className="ml-auto cursor-pointer hover:border-b border-[blue] hidden lg:flex"
          />
        </Link>
        <span className="hover:border-b-2 hover:border-[blue] text-[blue] hidden lg:flex">
          <sub>{getItemsCount()}</sub>
        </span>
      </div>

      {data ? (
        <div className="h-5/6 w-11/12 lg:w-6/12 mx-[auto]  flex flex-col lg:flex-row">
          <div className="flex flex-col w-11/12 lg:w-7/12 h-full ">
            <div className="lg:h-5/6 w-10/12 mx-[auto] py-8 lg:py-[6rem] flex flex-col items-center justify-center my-12 ">
              <img src={data?.image} />
            </div>
          </div>

          <div className="flex flex-col w-12/12 lg:w-5/12 h-5/6 my-[auto] lg:pl-6 py-[6rem]">
            <h1 className="text-3xl mb-6 font-bold">{data?.title}</h1>

            <h2 className="mb-[2rem] font-bold ">${data?.price}</h2>

            <button
              className="bg-[blue] text-base text-[white] flex items-center h-12 justify-center mb-3"
              onClick={() => dispatch(addToCart(item))}
            >
              <span>Add to Cart</span>
              <span className="ml-2 flex md:hidden">
                <ShoppingCartIcon width={15} />
              </span>
              <span className="flex md:hidden">{getItemsCount()}</span>
            </button>

            <button className="bg-[black] text-base text-[white] flex items-center h-12 justify-center">
              Buy Now
            </button>

            <div className="pt-[1rem]">
              <p
                className="my-3 font-bold cursor-pointer border-2 border-[blue]"
                onClick={() => {
                  setProductInfo(!productInfo);
                  setReturnPolicy(false);
                }}
              >
                Product Info
              </p>
              <h3 className={`${productInfo ? "bock" : "hidden"}`}>
                {data?.description}
              </h3>
            </div>

            <div className="mt-[1rem]">
              <p
                className="mt-1 font-bold cursor-pointer border-2 border-[blue]"
                onClick={() => {
                  setReturnPolicy(!returnPolicy);
                  setProductInfo(false);
                }}
              >
                Return Policy
              </p>
              <p className={`${returnPolicy ? "bock" : "hidden"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nostrum labore officia eligendi eum quidem voluptates alias
                nobis fugiat exercitationem ipsa omnis eius non consequuntur
                error, praesentium soluta sunt assumenda.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-screen flex items-center justify-center ${
            loader ? "hidden" : "block"
          }`}
        >
          <SpinnerCircularFixed
            enabled={true}
            secondaryColor="white"
            color="blue"
            speed="150"
            size="200"
          />
        </div>
      )}

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Product;
