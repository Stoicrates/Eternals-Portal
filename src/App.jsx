import "./App.css";
import Announcebox from "./Components/Announcebox";
import Brandcard from "./Components/Brandcard";
import Cap from "./Components/Cap";
import Footer from "./Components/Footer";
import Formcard from "./Components/Formcard";
import Helpdeskcard from "./Components/Helpdeskcard";
import { Instagram, Tiktok, Youtube } from "./Components/Iconframe";
import Insurancecard from "./Components/Insurancecard";
import Notes from "./Components/Notes";
import Productcard from "./Components/Productcard";
import Sentrifugocard from "./Components/Sentrifugocard";
import TheCard from "./Components/TheCard";
import Titlecard from "./Components/Titlecard";

function App() {
  return (
    <>
      <Cap />

      <div className="boxed flex flex-row p-6 gap-4 ">
        <div className="cols w-[30dvw]">
          <Titlecard />
          <Announcebox />
          <Footer />
        </div>

        <div className="cols flex-1">
          <TheCard />
          <div
            className="rows flex-1
          "
          >
            <Brandcard />
            <div className="cols flex-1 ">
              <Sentrifugocard />
              <Insurancecard />
            </div>
          </div>

          <Formcard />
        </div>
        <div className="cols">
          <Notes />
          <Productcard />
          <Helpdeskcard />
          <div className="flex flex-row g-8 justify-center w-[20dvw]">
            <Instagram />
            <Tiktok />
            <Youtube />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
