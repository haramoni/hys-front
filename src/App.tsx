import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { QuemSomos } from "./components/QuemSomos";
import { Servicos } from "./components/Servicos";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
