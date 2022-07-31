import React from 'react'
import Router from "next/router";

import Link from "next/link";
import { SpinnerCircularFixed } from "spinners-react";


interface Props {
    products:any[],
    loader:boolean
}

const Showcase:React.FC<Props> = ({products,loader}) => {
    return (
        <div className="  w-full">
          {products ? (
            <div className="flex flex-col lg:flex-row justify-center flex-row my-6">
              {products &&
                products.map((product) => (
                  <div
                    className="w-12/12 px-2 lg:px-0 mx-auto lg:w-3/12 h-[25rem] hover:border-2 border-[blue] lg:mx-2 h-full w-full flex flex-col lg:flex-row"
                    key={product.id}
                  >
                    <div className="w-full flex-col flex items-center justify-center cursor-pointer">
                      <Link
                        href="/products/[id]"
                        as={`/products/${product.id}`}
                        key={product.id}
                      >
                        <div className="flex flex-col h-3/4  py-[auto] items-center justify-center cursor-pointer">
                          <img src={product.image} height={200} width={150} />
    
                          <div className="flex flex-col jusitfy-center w-full mx-[auto] lg:items-center">
                            {product.title}
                            <br />
                            <p className="font-bold my-[auto]">{product.price}$</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div
              className={`w-full flex items-center justify-center h-[20rem] ${
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
  

export default Showcase