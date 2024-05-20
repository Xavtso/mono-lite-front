import "./TechAbout.css";
import { useNavigate } from "react-router-dom";

const TechPage = function () {
  const navigate = useNavigate();
  const navigateTo = function () {
    navigate("/about");
  };

  return (
    <div className="main">
      <button className="back" onClick={navigateTo}>
        Go Back
      </button>
      <h1 className="tech-title">Main info you should to know</h1>
      <div className="rules">
        <div className="rule loans-rule">
          <h2>Loans</h2>
          <ol className="list">
            <li className="list-item">
              Every month amount to pay will increase
            </li>
            <li className="list-item">You can't pay less than fixed payment</li>
            <li className="list-item">You can pay all amount by one time</li>
            <li className="list-item">You can have any amount of credits</li>
          </ol>
        </div>
        <div className="rule deposits-rule">
          <h2>Deposits</h2>
          <ol className="list">
            <li className="list-item">You must to have enough money</li>
            <li className="list-item">You can get money back in any time</li>
            <li className="list-item">You can deposit more in any time</li>
            <li className="list-item">You can have any amount of deposits</li>
          </ol>
        </div>
        <div className="rule transfers-rule">
          <h2>Transfers</h2>
          <ol className="list">
            <li className="list-item">
              On Your Balance must to be enough amount
            </li>
            <li className="list-item">Receiver card must be not blocked</li>
            <li className="list-item">
              Transaction description isn't neccesary
            </li>
            <li className="list-item">
              Amount must to be more than <b>zero</b>
            </li>
            <li className="list-item">
              You can see list of current users below here
            </li>
          </ol>
        </div>
        <div className="rule cashback-rule">
          <h2>CashBack</h2>
          <ol className="list">
            <li className="list-item">
              You get 2% cashback only from <b>Expense Simulator</b>
            </li>
            <li className="list-item">
              If your cashback balance more than 100 you get cash
            </li>
            <li className="list-item">Max Amount you can collect is 500</li>
            <li className="list-item">
              Receive money you can only with tax - 15%
            </li>
          </ol>
        </div>
        <div className="rule piggybank-rule">
          <h2>PiggyBank</h2>
          <ol className="list">
            <li className="list-item">You can have any amount of Jars</li>
            <li className="list-item">You can't withdraw more than you have</li>
            <li className="list-item">
              After break you will receive all jar balance
            </li>
            <li className="list-item">You can accumulate more that target</li>
          </ol>
        </div>
        <div className="rule closeaccount-rule">
          <h2>CloseAccount</h2>
          <ol className="list">
            <li className="list-item">
              Ok it's very simple - you just need to enter your email and
              password
            </li>
            <li className="list-item">
              If account is blocked you can't do anything
            </li>
          </ol>
        </div>
        <div className="rule simulate-deposit-rule">
          <h2>Simulate Deposit</h2>
          <ol className="list">
            <li className="list-item">
              Amount must to be less 50k at one time
            </li>
            <li className="list-item">Balance must to be less than 250k</li>
            <li className="list-item">Else your card can be blocked</li>
            <li className="list-item">
              Only one rule - balance must to be more than amount
            </li>
          </ol>
        </div>
        <div className="rule simulate-expense-rule">
          <h2>Simulate Expense</h2>
          <ol className="list">
            <li className="list-item">
              Only one rule - balance must to be more than amount
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TechPage;
