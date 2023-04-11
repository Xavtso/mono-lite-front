import Simulator from "./Simulator";
import Transactions from "./Transactions";
import "../../styles/user-page/Op_Container.css";

const Operations = function () {
  return (
    <div className="coop-container">
      <Transactions />
      <Simulator />
    </div>
  );
};

export default Operations;
