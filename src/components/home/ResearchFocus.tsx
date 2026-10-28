const FOCUS_AREAS = [
  {
    title: "Solid Oxide Electrolysis Cells",
    text: "High-temperature electrochemical cells that turn steam into hydrogen and can help integrate renewable electricity into fuel production.",
  },
  {
    title: "CO2 Electrolysis and Conversion",
    text: "Electrochemical routes that convert CO2 into useful products, connecting electrolysis to sustainable fuel production.",
  },
  {
    title: "Advanced Electrode Materials",
    text: "Low-cost, multifunctional, copper-based perovskite electrodes, and how they perform electrochemically.",
  },
  {
    title: "Materials Stability and Degradation",
    text: "Interface compatibility, protective layers and redox stability, and what degrades under demanding operating conditions.",
  },
];

export default function ResearchFocus() {
  return (
    <section className="alt">
      <div className="w">
        <span className="lab">Research focus</span>
        <h2>Research at the Intersection of Materials and Energy</h2>
        <p className="lead">
          My work focuses on understanding how materials, interfaces, and electrochemical processes
          can advance efficient energy conversion.
        </p>
        <div className="g4" style={{ marginTop: 36 }}>
          {FOCUS_AREAS.map((area) => (
            <div className="it" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
