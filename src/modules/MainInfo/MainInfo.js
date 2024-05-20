import Balance from "../../components/Balance/Balance";
import Card from "../../components/Card/Card";
import "./Head-Container.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardInfo } from "../../services/card";

const MainInfo = function () {
  const { card } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardInfo());
  }, [dispatch]);

  return (
    <div className="head-container head-container-scroll">
      <div className="head-container-item head-container-item-balance">
        <Balance cardInfo={card} />
      </div>
      <div className="head-container-item head-container-item-card">
        <Card cardInfo={card} />
      </div>
    </div>
  );
};

export default MainInfo;
