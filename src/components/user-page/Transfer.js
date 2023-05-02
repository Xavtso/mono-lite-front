import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/user-page/Transfer.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import UsersList from "./UsersList";
import axios from "axios";
const Transfer = function (props) {
  const [activeClass, setActiveClass] = useState("hidden");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const changeClass = function (e) {
    e.target.placeholder = "";
    setActiveClass("activeLabel");
  };
  const deleteClass = function (e) {
    e.target.placeholder = "Enter receiver name or card number";
    setActiveClass("hidden");
  };

const [users, setUsers] = useState([]);

const getUsers = function () {
  axios
    .get("https://mono-lite-back.azurewebsites.net/users")
    .then((response) => {
      const sorted = response.data.sort((a, b) => {
        let nameA = a.first_name.toUpperCase();
        let nameB = b.first_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setUsers(sorted);
    })
    .catch((error) => console.log(error));
};
  useEffect(() => {
    getUsers();
},[])
  
  useEffect(() => {
    // Фільтруємо користувачів за умовою пошукового запиту
    const filtered = users.filter((user) => {
      const name = `${user.first_name} ${user.second_name}`;
      return (
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.card_number.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const handleClose = function () {
    props.onClose();
  };

  return (
    <div className="op-modal modal-transfer">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="transfer--tablo">
        <span className="transfer--title">Transfer to..</span>
        <form className="transfer-form">
          <label className={activeClass}>
            Enter receiver name or card number
          </label>
          <FontAwesomeIcon icon={faSearch} size="xl" className="icon" />
          <input
            onBlur={deleteClass}
            onFocus={changeClass}
            className="transfer-input"
            type="text"
            placeholder="Enter receiver name or card number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="screen screen-transfer">
        <span>Or choose account</span>
        <UsersList users={filteredUsers} modalClose={handleClose} />
      </div>
    </div>
  );
};

export default Transfer;
