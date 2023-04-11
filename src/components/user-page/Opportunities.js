import "../../styles/user-page/Opportunities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillTrendUp,
  faSackDollar,
  faCircleInfo,
  faWallet,
  faPiggyBank,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Opportunities = function () {
  return (
    <div className="container">
      <div className="slot loan">
        {" "}
        <FontAwesomeIcon icon={faWallet} style={{ color: "#4141ff" }} />
        Loan
      </div>
      <div className="slot deposit">
        <FontAwesomeIcon
          icon={faMoneyBillTrendUp}
          style={{ color: "lightgreen" }}
        />
        Deposits
      </div>
      <div className="slot transfer">
        <FontAwesomeIcon
          icon={faMoneyBillTransfer}
          style={{ color: "lightgreen" }}
        />
        Transfer
      </div>
      <div className="slot cashback">
        {" "}
        <FontAwesomeIcon
          icon={faSackDollar}
          style={{ color: "rgb(246, 209, 161)" }}
        />
        Cash Back
      </div>
      <div className="slot piggy-bank">
        {" "}
        <FontAwesomeIcon icon={faPiggyBank} style={{ color: "#ff69b4" }} />
        Piggy Bank
      </div>
      <div className="slot close-account">
        {" "}
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /> Close
        Account
      </div>
      <div className="slot info">
        <FontAwesomeIcon
          icon={faCircleInfo}
          style={{ color: "#eee" }}
        />
        Info
      </div>
    </div>
  );
};

export default Opportunities;
