import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import Showcase from "../components/Showcase";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
const url: string = "https://fakestoreapi.com/products?limit=3";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const [loader, setLoader] = useState(false);

  const { data } = useFetch({ url });
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const openStore = () => {
    Router.push("/shop");
  };

  return (
    <div className="h-screen w-full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full border-2 border-[blue] h-[4rem] text-[white] bg-[blue]">
        <div className="flex  justify-around h-full">
          <Link href="/">
            <div className="lg:w-8/12  cursor-pointer flex items-center">
              <h1 className="w-max hover:border-b-2 hover:border-[white]">
                Peter&apos;s Place
              </h1>
            </div>
          </Link>

          <div className="flex flex-row items-center">
            <Link href="/about">
              <span className=" mx-4 lg:mx-12 hover:border-b-2 hover:border-[white] cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/shop">
              <span className=" mr-4 lg:mr-8 hover:border-b-2 hover:border-[white] cursor-pointer">
                Shop
              </span>
            </Link>
            <Link href="/cart">
              <span className="ml-0 flex lg:ml-6 hover:border-b-2 hover:border-[white] cursor-pointer">
                <ShoppingCartIcon width={20} height={30} />
                <sup className="pt-2">{getItemsCount()}</sup>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[100vh] flex items-center justify-center bg-[url('../assets/images/838.jpg')] bg-no-repeat bg-cover">
        <div>
          <h1 className="text-center text-white text-3xl mb-6">
            Peter&apos;s Place
          </h1>
          <button
            className="bg-[blue]  w-[12rem] text-white h-12"
            onClick={openStore}
          >
            Shop
          </button>
        </div>
      </div>

      {/* <NewProduct /> */}

      <div className=" mt-4 justify-center">
        <h1 className="text-2xl text-center ">
          The Best deals on Offer!{" "}
          <hr className="w-8/12 lg:w-3/12 border-[blue]  mx-auto"></hr>
        </h1>

        <Showcase products={data} loader={loader} openStore={openStore} />

        <div className="flex flex-col items-center my-6 ">
          <button
            className="w-6/12 lg:w-2/12 p-4 border-red border-2 bg-[blue] text-white"
            onClick={openStore}
          >
            Shop
          </button>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </div>
  );
};
export default Home;
