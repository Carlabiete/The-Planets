import TabButtons from "./TabButtons";

function InfoSection({
  planetData,
  currentPlanet,
  currentTab,
  setCurrentTab,
  formatSpaces,
}) {
  return (
    <div className="info-section">
      <div className="info-wrapper">
        <h2>{planetData.name}</h2>
        <p>{formatSpaces(planetData[currentTab].content)}</p>
        <span>
          <span style={{ opacity: 0.7 }}>Source : </span>
          <a
            href={planetData[currentTab].source}
            className="hyperlink opacity-70-hover"
          >
            Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM264 224C254.3 224 245.5 229.8 241.8 238.8C238.1 247.8 240.1 258.1 247 265L282 300L215 367C205.6 376.4 205.6 391.6 215 400.9L239 424.9C248.4 434.3 263.6 434.3 272.9 424.9L339.9 357.9L374.9 392.9C381.8 399.8 392.1 401.8 401.1 398.1C410.1 394.4 416 385.7 416 376L416 248C416 234.7 405.3 224 392 224L264 224z" />
            </svg>
          </a>
        </span>
      </div>
      <TabButtons
        currentPlanet={currentPlanet}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        variant={"desktop"}
      ></TabButtons>
    </div>
  );
}

let text =
  "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";

export default InfoSection;
