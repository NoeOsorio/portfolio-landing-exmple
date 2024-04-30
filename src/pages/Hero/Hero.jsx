import "./Hero.css";
import Henrry from "../../assets/images/henrry.png";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero">
        <section>
          <h1>Hello, <br />I am <strong>Noe Osorio</strong>.</h1>
          <h4>Software Engineer</h4>
          <button>Hire me</button>
        </section>
        <section>
          <img src={Henrry} alt="Noe Osorio" />
        </section>
      </div>
    </div>
  );
};

export default Hero;
