import React from "react";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Subscribe from "../components/Subscribe";
import Foot from "../components/Foot";
import Nav from "../components/Nav";

const contact: NextPage = () => {
  return (
    <div>
      <Nav />

      <div className="w-8/12  m-[auto] h-auto flex flex-col lg:flex-row mt-[6rem]">
        <div className="w-full lg:w-6/12 lg:pr-2">
          <h2 className="mb-12 font-bold text-4xl">Contact us.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className=" mt-[4rem] w-full lg:mt-0 lg:w-6/12 ml-2  block">
          <form className="px-2 lg:px-4">
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                type="text"
                className="border-b-2 focus:border-[blue] px-2 py-2 outline-none"
              ></input>
            </div>

            <div className="w-full my-4 py-2">
              <label className="">Email</label>
              <br />
              <input
                type="text"
                className="mt-2 border-b-2 focus:border-[blue] w-full px-2 py-2 outline-none"
              ></input>
              <br />
            </div>

            <div className="w-full w-full my-4">
              <label>Subject</label>
              <br />
              <input
                type="text"
                className="mt-2 border-b-2 focus:border-[blue] w-full px-2 py-2 outline-none"
              ></input>
              <br />
            </div>

            <label>Message</label>
            <br />
            <textarea className="w-full h-24 mt-2 border-b-2 focus:border-[blue] resize-none px-2 pt-2 outline-none"></textarea>

            <button className="p-4 bg-[blue] w-full lg:w-max text-white my-6">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Subscribe />
      <Foot />
    </div>
  );
};

export default contact;
