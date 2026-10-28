import { LINKEDIN_URL, RESEARCHGATE_URL } from "@/data/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="alt">
      <div className="w g2">
        <div>
          <span className="lab">Contact</span>
          <h2>Let’s Connect and Collaborate</h2>
          <p>
            I welcome conversations about electrochemical materials, solid oxide cells, sustainable
            energy systems, scientific collaboration, and interdisciplinary research.
          </p>
          <p>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">
              <b>LinkedIn</b>
            </a>{" "}
            ·{" "}
            <a href={RESEARCHGATE_URL} target="_blank" rel="noopener">
              <b>ResearchGate</b>
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
