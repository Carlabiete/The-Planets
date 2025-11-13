import { useEffect } from "react";

function TabButtons({ currentPlanet, currentTab, setCurrentTab, variant }) {
  const desktopTabs = [
    { id: "overview", label: "Overview" },
    { id: "structure", label: "Internal Structure" },
    { id: "surface", label: "Surface Geology" },
  ];

  const mobileTabs = [
    { id: "overview", label: "Overview" },
    { id: "structure", label: "Structure" },
    { id: "surface", label: "Surface" },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-color",
      `var(--accent-color-${currentPlanet})`
    );
  }, [currentPlanet]);

  if (variant === "desktop") {
    return (
      <div className="desktop-tabs-holder">
        {desktopTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            type="button"
            className={`tab-btn ${
              currentTab === tab.id ? "tab-btn--active" : ""
            }`}
          >
            <span>{`0${index + 1}`}</span>
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="mobile-tabs-holder">
      {mobileTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setCurrentTab(tab.id)}
          type="button"
          className={`tab-btn ${
            currentTab === tab.id ? "tab-btn--active" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabButtons;
