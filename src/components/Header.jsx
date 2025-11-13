import { useState } from "react";
import TabButtons from "./TabButtons";

function Header({
  currentPlanet,
  setCurrentPlanet,
  planetsData,
  currentTab,
  setCurrentTab,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header>
      <div className="header-inner">
        <h1 className="logo">The Planets</h1>
        <nav className="desktop-nav">
          <ul className="menu-list">
            {Object.keys(planetsData).map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => setCurrentPlanet(key)}
                  className={`opacity-70-hover ${
                    key === currentPlanet ? "opacity-70--active" : ""
                  }`}
                >
                  {planetsData[key].name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mobile-nav">
          <button
            type="button"
            className="burger-menu-btn"
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
            >
              <path d="M100-207v-92.5h761v92.5H100Zm0-227.5V-526h761v91.5H100Zm0-226.5v-92.5h761v92.5H100Z" />
            </svg>
          </button>
          <ul
            className="mobile-menu-list"
            style={{ display: isMenuVisible ? "block" : "none" }}
          >
            {Object.keys(planetsData).map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPlanet(key);
                    setIsMenuVisible(false);
                  }}
                >
                  <span
                    className={`mobile-menu-list-icon ${
                      key === currentPlanet
                        ? "mobile-menu-list-icon--active"
                        : ""
                    }`}
                    style={{
                      backgroundColor: `var(--accent-color-${key})`,
                      boxShadow: `0 0 10px 0 var(--accent-color-${key})`,
                    }}
                  ></span>
                  <span
                    className={`opacity-70-hover ${
                      key === currentPlanet ? "opacity-70--active" : ""
                    }`}
                  >
                    {planetsData[key].name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <TabButtons
        currentPlanet={currentPlanet}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        variant={"mobile"}
      ></TabButtons>
    </header>
  );
}

export default Header;
