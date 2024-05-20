import Simulator from "../../modules/Simulator";
import Transactions from "../Transactions/Transactions";
import "./Operations.css";

const Operations = function () {
  return (
    <div className="coop-container">
      <div className="transactions-container">
        <Transactions />
      </div>
      <div className="simulator-container">
        <Simulator />
      </div>
    </div>
  );
};

export default Operations;
