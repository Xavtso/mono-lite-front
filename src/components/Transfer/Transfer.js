import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Transfer.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import UsersList from "./modals/UserList/UsersList";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../services/transactions";
import { userSliceActions } from "../../store/slices/users.slice";
const Transfer = function (props) {
  const [activeClass, setActiveClass] = useState("hidden");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const changeClass = function (e) {
    e.target.placeholder = "";
    setActiveClass("activeLabel");
  };
  const deleteClass = function (e) {
    e.target.placeholder = "Enter receiver name or card number";
    setActiveClass("hidden");
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(userSliceActions.setSearchParam(searchQuery));
  }, [searchQuery, dispatch]);

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
        <span>Or choose receiver</span>
        <UsersList modalClose={handleClose} />
      </div>
    </div>
  );
};

export default Transfer;
