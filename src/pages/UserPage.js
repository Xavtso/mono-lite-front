// import MainInfo from "../components/user-page/MainInfo";
import MainInfo from "../components/user-page/Co-op Containers/MainInfo";
import "../styles/user-page/User-Home.css";
import Opportunities from "../components/user-page/Co-op Containers/Opportunities";
import Operations from "../components/user-page/Co-op Containers/Operations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = function () {
const navigate = useNavigate()
  useEffect(() => {
    navigate("/account");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <main>
      <MainInfo />
      <Opportunities />
      <Operations />
    </main>
  );
};

export default UserPage;
