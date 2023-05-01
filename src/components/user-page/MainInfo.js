import Balance from "./Balance";
import Card from "./Card";
import '../../styles/user-page/Head-Container.css'
import { useState,useEffect } from "react";
import axios from 'axios'
const MainInfo = function () {
  const [cardInfo, setCardInfo] = useState("");

  const getCard = async () => {
    const id = localStorage.getItem('id')
    try {
      const response = await axios.get(
        `https://mono-lite-back.azurewebsites.net/cards/${id}`,
      );
      setCardInfo(response.data);
    } catch (error) {
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