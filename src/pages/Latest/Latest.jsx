import "./Latest.css";
import Henrry from "../../assets/images/henrry.png";

const Latest = () => {
  return (
    <div className="latest">
      <h2>Latest</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        consequuntur labore aliquam eligendi velit, maxime eaque nisi. Aut
        dolore qui repellat, fuga officiis excepturi atque! Et consectetur
        maxime doloremque facere.
      </p>
      <div className="cards">
        <div className="card">
          <img src={Henrry} alt="" />
        </div>
        <div className="card">
          <img src={Henrry} alt="" />
        </div>
        <div className="card">
          <img src={Henrry} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Latest;
