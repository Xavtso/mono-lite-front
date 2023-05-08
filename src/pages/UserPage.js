// import MainInfo from "../components/user-page/MainInfo";
import MainInfo from "../components/user-page/Co-op Containers/MainInfo";
import "../styles/user-page/User-Home.css";
import Opportunities from "../components/user-page/Co-op Containers/Opportunities";
import Operations from "../components/user-page/Co-op Containers/Operations";

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
