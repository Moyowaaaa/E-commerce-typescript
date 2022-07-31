import React from "react";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";

import { SpinnerCircularFixed } from "spinners-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Props {
  products: any[];
  searchValue: string;
  loader: boolean;
}

const Store: React.FC<Props> = ({ products, searchValue, loader }) => {
  return (
    <div>
      {" "}
      {products ? (
        <div className="flex  flex-wrap flex-row justify-center flex-row my-6">
          {products
            ?.filter((product) => {
              return product.title
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((product) => (
              <Link
                href="/products/[id]"
                as={`/products/${product.id}`}
                key={product.id}
              >
                <div
                  className="w-full lg:w-3/12  h-[50vh] lg:ml-8 mt-3 hover:border-2 border-[blue] cursor-pointer"
                  key={product.id}
                >
                  <div className="flex flex-col h-3/4  py-[auto] items-center justify-center bg-[#fff]">
                    <img src={product.image} height={100} width={150} />
                  </div>
                  <div className="flex flex-col jusitfy-around w-11/12 mx-[auto]">
                    {product.title}
                    <br />
                    <p className="font-bold my-[auto]">{product.price}$</p>
                  </div>
                </div>
              </Link>
            ))}
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
            size="100"
            color="blue"
            speed="100"
            className="h-100 w-100"
          />
        </div>
      )}
    </div>
  );
};

export default Store;
