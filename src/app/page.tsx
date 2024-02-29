import React from "react";
import Navbar from "./components/Navbar.tsx";
import SecondNav from "./components/SecondNav.tsx";
import InfoSort from "./components/InfoSort.tsx";
import Path from "./components/Path.tsx";
import Footer from "./components/Footer.tsx";
import RatedCards from "./components/RatedCards.tsx";

const Home: React.FC = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div
        className="bg-gray-100"
        style={{ paddingLeft: 320, paddingRight: 320 }}
      >
        {/* Render Navbar */}

        <main>
          <h1 className="text-slate-700 text-5xl leading-[60px] pt-10 mb-5">
            Best Website builders in the US
          </h1>

          <InfoSort />

          <SecondNav />
          <Path />

          <br />
          <div className="renderCards">
            <RatedCards />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
