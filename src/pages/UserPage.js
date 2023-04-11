import MainInfo from "../components/user-page/MainInfo";
import "../styles/user-page/User-Home.css";
import Opportunities from "../components/user-page/Opportunities";
import Operations from "../components/user-page/Operations";

const UserPage = function () {
  return (
    <main>
      <MainInfo />
      <Opportunities />
      <Operations />
    </main>
  );
};

export default UserPage;
