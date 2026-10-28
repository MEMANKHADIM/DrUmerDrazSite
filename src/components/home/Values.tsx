const VALUES = [
  {
    title: "Accessible Materials",
    text: "Exploring alternatives to expensive critical-material-dependent electrode systems.",
  },
  {
    title: "Reliable Electrochemical Systems",
    text: "Understanding interfaces, degradation, and stability.",
  },
  {
    title: "Sustainable Energy Pathways",
    text: "Supporting hydrogen production and CO2 conversion research.",
  },
];

export default function Values() {
  return (
    <section>
      <div className="w">
        <span className="lab">Values</span>
        <h2>Research with Purpose</h2>
        <div className="cards">
          {VALUES.map((value) => (
            <div className="it" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
