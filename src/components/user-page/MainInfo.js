import Balance from "./Balance";
import Card from "./Card";
import '../../styles/user-page/Head-Container.css'
import { useState,useEffect } from "react";
import axios from 'axios'
const MainInfo = function () {
  const [cardInfo, setCardInfo] = useState("");

  const getCard = async () => {
    try {
      const response = await axios.get(
        "https://mono-lite-backend.azurewebsites.net/cards",
      );
      setCardInfo(response.data);
    } catch (error) {
      window.location.replace("/");
      console.log(error);
    }
  };

  useEffect(() => {
      getCard();
  }, []); 
    
  return (
    <div className="head-container">
      <Balance cardInfo={cardInfo} />
          <Card cardInfo={cardInfo} />
    </div>
  );
}

export default MainInfo;