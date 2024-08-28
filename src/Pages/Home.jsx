import Earth from "../assets/images/bg.png";

import Navbar from "../Components/Navbar/Navbar";
import Temperature from "../Components/Temperature/Temperature";
import ImageFull from "../Components/ImageFull/ImageFull";
import Methane from "../Components/Methane/Methane";
import CO2 from "../Components/Co2/Co2";
import Glacier from "../Components/Glacier/Glacier";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";

export default function Home() {
  return (
    <>
      <div className="HomeDiv">
        <img className="bgEarth" src={Earth} alt="Earth Pollution" />

        <h1>
          Come l&rsquo;inquinamento <br />
          sta <span className="changeText">trasformando</span> <br /> il nostro
          pianeta
        </h1>
      </div>

      <div className="short">
        <Temperature />
      </div>

      <ImageFull />

      <div className="short">
        <Methane />
        <CO2 />
        <Glacier />
      </div>

      <Footer />

      <Navbar />
      <Logo />
    </>
  );
}
