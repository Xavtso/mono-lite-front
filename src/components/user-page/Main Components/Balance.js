import { useEffect, useState } from "react";
import "../../../styles/user-page/Balance.css";
import axios from "axios";
import { io } from "socket.io-client";

const Balance = function (props) {
  const [balance, setBalance] = useState(props.cardInfo.card_balance);

  const fetchBalance = async () => {
    const id = localStorage.getItem("id");
    try {
      const response = await axios.get(
        `https://mono-lite-back.azurewebsites.net/cards/${id}`,
      );
      const data = response.data;
      setBalance(data.card_balance.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  };

   const socket = io("http://localhost:3000");
   socket.on("connect", function () {
     console.log("Connected");

     socket.emit("events", { test: "test" });
     socket.emit("identity", 0, (response) =>
       console.log("Identity:", response),
     );
   });
   socket.on("events", function (data) {
     console.log("event", data);
   });
   socket.on("exception", function (data) {
     console.log("event", data);
   });
   socket.on("disconnect", function () {
     console.log("Disconnected");
   });

  useEffect(() => {
    //КОСТИЛЬ ? (Of course)
    // Виконання періодичного запиту на сервер кожні 5 секунд
    const intervalId = setInterval(() => {
      fetchBalance();
    }, 3000);

    // Прибирання інтервалу при розмонтажі компоненту
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="balance">
      <div className="self-balance">
        <span className="balance__label">Balance: </span>
        <span className="balance__value">
          {balance} <span id="currency">₴</span>
        </span>
      </div>
    </div>
  );
};

export default Balance;
