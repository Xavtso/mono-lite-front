import MainInfo from "../../modules/MainInfo/MainInfo";
import "./User-Home.css";
import Opportunities from "../../modules/Opportunities";
import Operations from "../../components/Operations/Operations";

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
