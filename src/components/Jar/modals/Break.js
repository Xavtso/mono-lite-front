import "./JarFunctions.css";
import brokenJar from "../../../images/BrokenJar.png";
import { useSelector } from "react-redux";
import { selectJar } from "../../../store/selectors/jar/selectJar";
import { doBreakJar } from "../../../services/jar";

const Break = function (props) {
  const jar = useSelector(selectJar);

  const handleDeepClose = () => {
    props.onDeepClose();
  };

  const handleClose = () => {
    props.onClose();
  };

  const breakJar = function () {
    doBreakJar(jar.vault_id);
    handleDeepClose();
  };

  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="jar_container broken">
        <img className="broken-Img-Jar" src={brokenJar} alt="brokenJar" />
      </div>
      <h2 className="break-title">Are you sure ?</h2>
      <p className="lefted_amount">
        Amount you'll receive: {jar.vault_balance} ₴
      </p>
      <div className="btn-container break-btn-container">
        <button className="btn break-btn" onClick={breakJar}>
          Break
        </button>
      </div>
    </div>
  );
};
export default Break;
