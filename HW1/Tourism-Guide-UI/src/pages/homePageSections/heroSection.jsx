import Section from "../../components/section";
import Image from "../../components/image";
import hero from "../../assets/images/hero.png";
const HeroSection = () => (
  <Section className="heroSection">
    <div>
      <Image className="heroSection-image" src={hero} alt="Hero" />
      <div className="heroSection-text skew spreadLetters">
        <p className="heroSection-text--h1">Share your holiday stories.</p>
        <p className="heroSection-text--h3">
          Write about your experiences while on holiday in various parts of
          Indonesia, and reach a wide readership.
        </p>
      </div>
    </div>
  </Section>
);

export default HeroSection;
