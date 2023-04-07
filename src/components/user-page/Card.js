import { useEffect, useState } from "react";
import "../../styles/user-page/Card.css";
import axios from "axios";

export default function Card() {
  const [cardInfo, setCardInfo] = useState("");

  const test = () => {
    axios
      .get("https://mono-lite-backend.azurewebsites.net/cards")
      .then((response) => setCardInfo(response.data))
      .catch((error) => {
        // window.location.replace("/");
        console.log(error);
      });
  };

  useEffect(() => {
    test(); // Викликати функцію test при вході на сторінку
  }, []); // Пустий масив залежностей, щоб ефект виконався тільки один раз

  return (
    <div className="card">
      <div className="card__info">
        <p className="card__name">{`${
          cardInfo.owner_name + " " + cardInfo.owner_surname
        }`}</p>
        <div className="card__balance">
          <p className="card__balance-value">{cardInfo.card_balance}₴</p>
          <p className="card__balance-label">Баланс{`${cardInfo.blocked}`}</p>
        </div>
      </div>
      <div className="card__number">{cardInfo.card_number}</div>
    </div>
  );
}
