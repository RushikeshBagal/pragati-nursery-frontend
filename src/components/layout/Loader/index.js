import "./style.css";
import loader1 from "../../../assets/images/loader 1.png";
import loader2 from "../../../assets/images/loader 2.png";
import loader3 from "../../../assets/images/loader 3.png";
import loader4 from "../../../assets/images/loader 4.png";

export const Loader = () => {
  return (
    <div className="loader-class">
      <div className="loader">
        <img className="loader-logo" id="one" src={loader1} alt="loader" />
        <img className="loader-logo" id="two" src={loader2} alt="loader" />
        <img className="loader-logo" id="three" src={loader3} alt="loader" />
        <img className="loader-logo" id="four" src={loader4} alt="loader" />
      </div>
    </div>
  );
};
