import Deposit from "./Deposit";
import '../../styles/user-page/Simulator.css'
import Expense from "./Expense";
const Simulator = function () {
    return (
      <div className="simulator-container">
            <h2>Simulator</h2>
            <div className="operation-block">
                <Deposit />
                <Expense/>
            </div>
      </div>
    );
};

export default Simulator;
