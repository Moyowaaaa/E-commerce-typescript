import React from "react";
import Foot from "../components/Foot";
import Nav from "../components/Nav";
import Subscribe from "../components/Subscribe";
import Router from "next/router";

const about: NextPage = () => {
  return (
    <div>
      <div className="h-screen w-full  flex flex-col">
        <Nav />

        <div className="w-10/12 lg:w-8/12 mx-[auto] h-[auto] pt-8 text-justify">
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            aliquam id diam maecenas ultricies mi eget mauris. At auctor urna
            nunc id. Eu lobortis elementum nibh tellus molestie nunc non
            blandit. Dui sapien eget mi proin sed libero. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper
            morbi tincidunt ornare massa eget. A condimentum vitae sapien
            pellentesque habitant. Cras tincidunt lobortis feugiat vivamus at
            augue. Habitant morbi tristique senectus et. Consectetur purus ut
            faucibus pulvinar elementum integer enim. Iaculis urna id volutpat
            lacus laoreet non curabitur. Tellus integer feugiat scelerisque
            varius morbi enim nunc faucibus. Velit sed ullamcorper morbi
            tincidunt ornare massa eget. Quis blandit turpis cursus in hac.
            Elementum facilisis leo vel fringilla. Tincidunt arcu non sodales
            neque sodales ut etiam sit. Vitae nunc sed velit dignissim sodales
            ut eu. Et malesuada fames ac turpis egestas integer.
          </p>

          <p className="py-4 pb-12">
            Tortor dignissim convallis aenean et tortor at risus viverra.
            Vivamus at augue eget arcu. Rhoncus est pellentesque elit
            ullamcorper dignissim cras. Gravida dictum fusce ut placerat orci
            nulla pellentesque. Pellentesque elit ullamcorper dignissim cras
            tincidunt lobortis feugiat. Id aliquet risus feugiat in ante metus
            dictum. Sagittis vitae et leo duis ut. Diam vulputate ut pharetra
            sit amet aliquam id diam maecenas. Imperdiet nulla malesuada
            pellentesque elit eget. Maecenas pharetra convallis posuere morbi
            leo urna molestie at. Eros donec ac odio tempor orci dapibus
            ultrices.
          </p>
        </div>

        <Subscribe />
        <Foot />
      </div>
    </div>
  );
};

export default about;
