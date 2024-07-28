import "./App.css";
import Announcebox from "./Components/Announcebox";
import Brandcard from "./Components/Brandcard";
import Cap from "./Components/Cap";
import Footer from "./Components/Footer";
import Formcard from "./Components/Formcard";
import Helpdeskcard from "./Components/Helpdeskcard";
import { Instagram, Tiktok, Youtube } from "./Components/Iconframe";
import Insurancecard from "./Components/Insurancecard";
import Lmscard from "./Components/Lmscard";
import Notes from "./Components/Notes";
import Productcard from "./Components/Productcard";
import Sentrifugocard from "./Components/Sentrifugocard";
import Titlecard from "./Components/Titlecard";

function App() {
  return (
    <>
      <Cap />

      <div className="boxed flex p-10 max-lg:p-6 flex-row gap-4 bg-white">
        <div className="cols w-[24dvw] max-lg:w-[32dvw]">
          <Titlecard />
          <Announcebox />
          <Footer />
        </div>
        <div className="flex flex-1 max-lg:flex-col gap-4 max-lg:overflow-scroll">
          <div className="cols w-full max-lg:h-[800px] max-lg:shrink-0">
            <Lmscard />
            <div
              className="rows h-[40%]
          "
            >
              <Brandcard />
              <Productcard />
            </div>
          </div>
          <div className="cols w-[32dvw] max-lg:h-[840px] max-lg:shrink-0 max-lg:w-full">
            <Notes />
            <Sentrifugocard />
            <Insurancecard />
            <Helpdeskcard />
            <Formcard />
            <div className="flex flex-row g-8 justify-center">
              <Instagram />
              <Tiktok />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
