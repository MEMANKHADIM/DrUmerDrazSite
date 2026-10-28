import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w hg">
        <div>
          <span className="lab">Materials Scientist · Electrochemistry Researcher</span>
          <h1>
            From a Small Town in Pakistan to the Frontiers of{" "}
            <span className="cu">Clean Energy Research.</span>
          </h1>
          <p className="lead">
            I explore advanced materials and electrochemical systems to improve the performance,
            stability, and accessibility of next-generation clean-energy technologies.
          </p>
          <div className="bt">
            <Link className="btn p" href="/research">
              Explore My Research
            </Link>
            <Link className="btn" href="/#about">
              Read My Journey
            </Link>
          </div>
          <p className="sub">
            PhD in Materials for Health, Environment and Energy · University of Rome Tor Vergata
          </p>
          <svg width="220" height="14" aria-hidden="true">
            <path
              className="hl"
              d="M0 7h60l12-5 12 10 12-10 12 10 12-5h100"
              fill="none"
              stroke="#829486"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="ph">
          <Image
            src="/images/umer-draz.jpg"
            width={720}
            height={720}
            loading="eager"
            alt="Dr. Umer Draz in a laboratory wearing a white lab coat, with electrochemical test equipment behind him"
          />
        </div>
      </div>
    </section>
  );
}
