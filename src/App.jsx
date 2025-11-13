import { useState } from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import InfoSection from "./components/InfoSection";
import InfoTabs from "./components/InfoTabs";
import { planetsData } from "./data/planetsData";
import { insertNonBreakingSpaces } from "./utiles/textFormatter";
import "./App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState("earth");
  const planetData = planetsData[currentPlanet];
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <>
      <Header
        currentPlanet={currentPlanet}
        setCurrentPlanet={setCurrentPlanet}
        planetsData={planetsData}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Header>
      <main>
        <div className="main-section">
          <ImageSection planetData={planetData}></ImageSection>
          <InfoSection
            planetData={planetData}
            currentPlanet={currentPlanet}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            formatSpaces={insertNonBreakingSpaces}
          ></InfoSection>
        </div>
        <InfoTabs planetData={planetData}></InfoTabs>
      </main>
    </>
  );
}

export default App;
