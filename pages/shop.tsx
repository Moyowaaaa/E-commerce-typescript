import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import Subscribe from "../components/Subscribe";
import Navbar from "../components/navbar";
import useFetch from "../utils/useFetch";
const url = "https://fakestoreapi.com/products";
import Store from "../components/Store";
import dynamic from "next/dynamic";

import {
  PlusIcon,
  ChevronDoubleLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";

const Shop: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loader, setLoader] = useState(false);
  const search = (e: Event) => {
    setSearchValue(e.target.value);
  };

  const { data } = useFetch({ url });

  return (
    <div className="h-screen">
      <Navbar search={search} />

      <Link href="/">
        <div className="flex flex-row cursor-pointer ml-2 lg:ml-6 hover:underline hover:decoration-[blue]">
          <ChevronDoubleLeftIcon width={30} />
          <span className="my-2">Back</span>
        </div>
      </Link>

      <div className="w-12/12  mt-12 mx-auto">
        <Store
          search={search}
          loader={loader}
          products={data}
          searchValue={searchValue}
        />
      </div>

      <Subscribe />
      <Footer className="absolute" />
    </div>
  );
};

export default Shop;
