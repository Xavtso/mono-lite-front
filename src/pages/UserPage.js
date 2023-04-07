import { useEffect,useState } from 'react';
import Balance from '../components/user-page/Balance';
import Card from '../components/user-page/Card';
import MainInfo from '../components/user-page/MainInfo';
import '../styles/user-page/User-Home.css'
import axios from 'axios';
import Transactions from '../components/user-page/Transactions';

const UserPage = function (props) {
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//     const test = function () {
// console.log(props);
//        setUserData()
//    }
  // useEffect(() => {
  //   axios
  //     .get(`/users`)
  //     .then((response) => {
  //       setUserData(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
      <main>
      <Card />
      <Transactions/>
    </main>
  );
};

export default UserPage;