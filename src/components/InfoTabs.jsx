function InfoTabs({ planetData }) {
  const tabs = [
    { id: "rotation", label: "Rotation time" },
    { id: "revolution", label: "Revolution time" },
    { id: "radius", label: "Radius" },
    { id: "temperature", label: "Average temp." },
    //{ id: "test", label: "test" },
  ];

  return (
    <div className="info-tabs-holder">
      {tabs.map((tab) => (
        <div key={tab.id} className="info-tab">
          <span className="info-tab-label">{tab.label}</span>
          <span className="info-tab-value">
            {planetData[tab.id]?.value}
            {tab.id === "temperature" ? "" : " "}
            <span>{planetData[tab.id]?.units}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default InfoTabs;
