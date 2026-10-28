const EDUCATION = [
  {
    degree: "PhD, Materials for Health, Environment and Energy",
    school: "University of Rome Tor Vergata, Italy",
    details: "Mar 2022 – Mar 2025 · Grade: Excellent",
    summary:
      "Developed copper-based, non-critical, multifunctional perovskite electrodes for CO2 electrolysis and reversible solid oxide cells, and investigated electrolyte compatibility and degradation under high polarization.",
  },
  {
    degree: "MS in Physics",
    school: "COMSATS University Islamabad",
    details: "Feb 2017 – Jan 2019",
    summary:
      "Thesis: “Study of Charge Transport Phenomena at Micro Level in Fuel Cell.” Prepared electrolyte materials, investigated ionic conduction, and fabricated low-temperature solid oxide fuel-cell devices using LNCZ as electrode.",
  },
  {
    degree: "BS in Physics",
    school: "COMSATS Institute of Information Technology",
    details: "Feb 2013 – Jan 2017 · 3.7/4.0 · Silver Medal",
    summary:
      "Studied structural and optical properties of metal-doped zinc oxide nanoparticles using XRD, FTIR, SEM and UV–Vis spectroscopy.",
  },
  {
    degree: "Bachelor of Education (BEd)",
    school: "Allama Iqbal Open University",
    details: "Mar 2019 – Mar 2021 · Grade: A",
    summary:
      "Science education, laboratory teaching, experiment design, and educational technology and teaching aids.",
  },
];

export default function Education() {
  return (
    <section>
      <div className="w">
        <span className="lab">Education</span>
        <h2>Academic Foundation</h2>
        <div className="g4">
          {EDUCATION.map((item) => (
            <div className="it" key={item.degree}>
              <h3>{item.degree}</h3>
              <b style={{ color: "var(--ink)" }}>{item.school}</b>
              <br />
              <small className="cu">{item.details}</small>
              <p style={{ marginTop: 10 }}>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
