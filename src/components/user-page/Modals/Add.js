// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../../../styles/user-page/PigFunctions.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import {  faUser } from "@fortawesome/free-solid-svg-icons";

// const Add = function (props) {
//   const [vault, setVault] = useState([]);
//   const [currContributor, setCurrentContributor] = useState([]);
//   const [choosenCandidate, setChoosenCandidate] = useState([]);
//   const [users, setUsers] = useState([]);

//   const handleClose = () => {
//     props.onClose();
//   };

//   const updateInfo = () => {
//     setVault(props.vault);
//   };

//   useEffect(() => {
//     updateInfo();
//   });

//   const findContributor = function () {
//     axios
//       .get(`http://localhost:5000/users/${vault.contributors}`)
//       .then((response) => setCurrentContributor(response.data))
//       .catch((error) => console.log(error));
//     console.log(currContributor)
//   };

//   const getPotentialContributors = function () {
//     axios
//       .get("https://mono-lite-back.azurewebsites.net/users")
//       .then((response) => {
//         const sorted = response.data.sort((a, b) => {
//           let nameA = a.first_name.toUpperCase();
//           let nameB = b.first_name.toUpperCase();
//           if (nameA < nameB) {
//             return -1;
//           }
//           if (nameA > nameB) {
//             return 1;
//           }
//           return 0;
//         });
//         setUsers(sorted);
//       })
//       .catch((error) => console.log(error));
//   };
//   useEffect(() => {
//     getPotentialContributors();
//   });
//   useEffect(() => {
//     const interval = setInterval(() => {
//       findContributor();
//     }, 2000);
  
//     // Повернути функцію очищення для очищення інтервалу під час знищення компонента або при зміні залежностей
//     return () => clearInterval(interval);
//   });

//   const addContributor = function () {
//     axios
//       .post(`https://mono-lite-back.azurewebsites.net/piggybank/add`, {
//         vault_id: vault.vault_id,
//         user_id: choosenCandidate.user_id
//       })
//       .then((response) => response && findContributor())
//       .catch((error) => console.log(error));
//   };

//   const chooseUser = function (user) {
//     setChoosenCandidate(user);

//   };

//   return (
//     <div className="func_modal">
//       <button className="btn--close-modal" onClick={handleClose}>
//         &times;
//       </button>

//       <h2 className="add-title">Current Contributor</h2>
//       {currContributor !== [''] ? (
//         <div
//           className="users__row current-user-row"
//           onClick={() => chooseUser(currContributor)}
//         >
//           <div
//             className={currContributor.imageURL ? "" : `user-background v-2`}
//           >
//             {currContributor.imageURL ? (
//               <img
//                 src={currContributor.imageURL}
//                 alt="user"
//                 className="user-image"
//               />
//             ) : (
//               <FontAwesomeIcon icon={faUser} className="users__icon" />
//             )}
//           </div>
//           <p className="receiver-name">
//             {currContributor.first_name + " " + currContributor.second_name}
//           </p>
//         </div>
//       ) : (
//         <p className="empty-row">You don't have any contributors</p>
//       )}

//       <div className="add-controls">
//         <button className="btn btn-add" onClick={addContributor}>
//           Add
//         </button>
//         <button className="btn btn-remove">Remove</button>
//       </div>

//       <h2 className="potential-title">Potential Contributors</h2>
//       <div className="users add-contributors-container">
//         {users.map((user, index) => (
//           <div
//             key={index}
//             className="users__row"
//             onClick={() => chooseUser(user)}
//           >
//             <div className={user.imageURL ? "" : `user-background v-2`}>
//               {user.imageURL ? (
//                 <img src={user.imageURL} alt="user" className="user-image" />
//               ) : (
//                 <FontAwesomeIcon icon={faUser} className="users__icon" />
//               )}
//             </div>
//             <p className="receiver-name">
//               {user.first_name + " " + user.second_name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Add;
