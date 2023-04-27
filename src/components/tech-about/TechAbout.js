import { useState,useEffect } from 'react';
import '../../styles/TechAbout.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';

const TechAbout = function () {
    const [users, setUsers] = useState([])
    const [btnClassList, setBtnClassList] = useState('btn--show')
    const [userClassList, setUserClassList] = useState('hidden')
    
    const getUsers = function () {
        axios
          .get("https://mono-lite-back.azurewebsites.net/users")
          .then((response) => {
            setUsers(response.data.reverse());
          })
          .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const formatCardNumber = (number) => {
      if (number) {
        const cleanedNumber = number.replace(/\D/g, "");
        const formattedNumber = cleanedNumber.match(/.{1,4}/g).join(" ");
        return formattedNumber;
      }
      return "";
    };

    const formatDate = function (date) {
      const now = new Date();
      const diff = now - date;

      if (diff < 60000) {
        // менше 1 хвилини
        return "щойно";
      } else if (diff < 1800000) {
        // менше 30 хвилин
        const minutesAgo = Math.floor(diff / 60000);
        return `${minutesAgo} хв. тому`;
      } else if (diff < 3600000) {
        // менше 1 години
        const minutesAgo = Math.floor(diff / 60000);
        return `${minutesAgo} хв. тому`;
      } else if (now.toDateString() === date.toDateString()) {
        // в той же день
        return "сьогодні";
      } else if (diff < 86400000) {
        // менше 1 доби
        return "учора";
      } else {
        // більше 1 доби
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
    };

    const showUsers = function () {
        setBtnClassList('hidden')
        setUserClassList('users')
    }

    const navigate = useNavigate();
    const navigateTo = function () {
        navigate('/account')
    }

  return (
      <div className="main">
          <button className='back' onClick={navigateTo}>Go Back</button>
      <h1 className="tech-title">Main info you should to know</h1>
      <div className="rules">
        <div className="rule loans-rule">
          <h2>Loans</h2>
          <ol className="list">
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
          </ol>
        </div>
        <div className="rule deposits-rule">
          <h2>Deposits</h2>
          <ol className="list">
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
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
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
            <li className="list-item">progress</li>
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
            <li className="list-item">
              Balance must to be less than 250k
            </li>
            <li className="list-item">
              Else your card can be blocked
            </li>
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
              <button className={btnClassList} onClick={showUsers}>Show Users</button>
          <div className={userClassList}>
              {users ? users.map(user => (
                  <div key={user.createdAt} className="user">
                <p className="username"><FontAwesomeIcon icon={faUser}/>  {user.first_name + ' ' + user.second_name}</p>
                <p className="cardnumber"><FontAwesomeIcon icon={faCreditCard}/>  {formatCardNumber(user.card_number)}</p>
                <span className="registerAt"><FontAwesomeIcon icon={faCalendarDays}/>  Register at {formatDate(new Date(user.createdAt))}</span>
              </div>
        )) : null}
          </div>
    </div>
  );
};

export default TechAbout;
