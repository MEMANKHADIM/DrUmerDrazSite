const TIMELINE = [
  { years: "2013–2017", title: "BSc in Physics", place: "COMSATS Institute of Information Technology" },
  { years: "2017–2019", title: "MS in Physics", place: "COMSATS University Islamabad" },
  { years: "2018–2022", title: "Laboratory Specialist", place: "Government of Punjab" },
  { years: "2022–2025", title: "PhD research", place: "University of Rome Tor Vergata" },
  { years: "2025–Present", title: "Postdoctoral Research Fellow", place: "University of Genoa" },
];

export default function About() {
  return (
    <section id="about">
      <div className="w g2">
        <div>
          <span className="lab">The journey</span>
          <h2>Curiosity Has No Geographic Boundaries.</h2>
          <p>
            My academic journey began with a foundation in physics in Pakistan and grew into a
            deeper interest in the materials and electrochemical processes that shape energy
            technologies. Through continued study and research, I progressed from laboratory work
            and experimental materials science to doctoral research in Italy.
          </p>
          <p>
            During my PhD at the University of Rome Tor Vergata, I investigated affordable,
            multifunctional electrode materials for solid oxide electrochemical systems, focusing on
            electrode–electrolyte compatibility, performance under challenging operating conditions,
            and long-term stability.
          </p>
          <p>
            Today, as a postdoctoral research fellow at the University of Genoa, I continue
            exploring electrochemical technologies and integrated systems for sustainable fuel and
            energy production.
          </p>
          <p>
            This journey has strengthened my belief that scientific curiosity, consistent effort,
            and access to educational opportunities can open doors to meaningful research.
          </p>
        </div>
        <div>
          <ol className="tl" aria-label="Career timeline">
            {TIMELINE.map((step) => (
              <li key={step.years}>
                <small>{step.years}</small>
                <b>{step.title}</b>
                {step.place}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
