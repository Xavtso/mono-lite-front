import Deposit from "../../components/DepositsSim";
import "./Simulator.css";
import Expense from "../../components/Expenses";
const Simulator = function () {
  return (
    <div className="simulator-container">
      <h2>Simulator</h2>
      <div className="operation-block">
        <Deposit />
        <Expense />
      </div>
    </div>
  );
};

export default Simulator;
