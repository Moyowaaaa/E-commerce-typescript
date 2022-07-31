import React, { useEffect } from "react";

const Foot = () => {
  useEffect(() => {
    function process() {
      const d = new Date();
      const year = d.getFullYear();
      document.getElementById("demo").innerHTML = year;
    }
    process();
  }, []);

  return (
    <div className="w-full bottom-0 bg-[blue] text-white">
      <div className="block flex flex-col  w-4/12 mx-8">
        <h2 className="my-12">E commerce</h2>

        <p>
          123 Web Street,
          <br /> Demo State
        </p>
      </div>
      <div className="w-12/12 justify-center flex col  text-center ">
        <h2 className="text-base flex flex-row justify-center pt-12 pb-6">
          {" "}
          Moyowa&nbsp;🙂&nbsp; <span id="demo"></span>
        </h2>
      </div>
    </div>
  );
};

export default Foot;
