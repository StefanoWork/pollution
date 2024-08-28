import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";

export default function Error() {
  return (
    <d>
      <div className="errorPage">
        <h1 className="noAbs">Ops, questa pagina non esiste!</h1>
      </div>

      <Navbar />
      <Footer />
      <Logo />
    </d>
  );
}
