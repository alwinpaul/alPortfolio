
import Layout from "../components/Layout.js";
import Hero from "../components/HeroSection/Hero.js";
import TechBox from "../components/TechBox.js/TechBox.js";
import Experience from "../components/Experience/Experience.js";
import Projects from "../components/Projects/Projects.js";
import GetInTouch from "../components/GetInTouch/GetInTouch.js";
import AboutSection from "./../components/about/AboutSection.js";

export default function Home() {
  return (
    <Layout metaTitle="Alwin Paul Abraham: Front-end Developer">
      <section className="w-8/12 m-auto">
        <Hero />
        <AboutSection />
        <TechBox />
        <Experience />
        <Projects />
        <GetInTouch />
      </section>

    </Layout>
  );
}
