import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div className="h-6/6 bottom-0 w-[100%]">
      <div className="bg-black h-[30rem] flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-4xl text-white flex justify-center">
          JOIN OUR MAILING LIST
        </h2>
        <h4 className="text-base lg:text-xl text-white mb-6">
          And Never Miss An Update
        </h4>

        <div className="flex flex-col justify-center text-white w-11/12 lg:w-4/12 text-center">
          <label required>Enter your Email Here</label>
          <input
            placeholder="Email"
            className="outline-white border-2 border-white mt-6 w-full h-12 text-black py-[auto] pl-4 pr-4"
          />
          <button className="outline-white border-2 border-white mt-6 w-12/12 h-12">
            Subscribe{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
