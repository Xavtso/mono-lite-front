// import MainInfo from "../components/user-page/MainInfo";
import MainInfo from "../components/user-page/Co-op Containers/MainInfo";
import "../styles/user-page/User-Home.css";
import Opportunities from "../components/user-page/Co-op Containers/Opportunities";
import Operations from "../components/user-page/Co-op Containers/Operations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = function () {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("https://mono-lite-back.azurewebsites.net/auth/refresh", {
        id: id,
      })
      .then((response) => response && navigate("/account"))
      .catch((error) => error && navigate("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MainInfo />
      <Opportunities />
      <Operations />
    </main>
  );
};

export default UserPage;
