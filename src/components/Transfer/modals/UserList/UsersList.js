import { useEffect, useState } from "react";
import "./UsersList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import TransferModal from "../TransferModal/TransferModal";
import { selectFilteredUsers } from "../../../../store/selectors/users/selectFilterUsers";
import { useSelector,useDispatch } from "react-redux";
import { getAllUsers } from "../../../../services/transactions";


const UsersList = function (props) {
  const [background, setBackground] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const  users  = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();

  const handleModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const closeModals = function () {
    props.modalClose();
  };

  console.log(users);
  useEffect(() => {
    setBackground(Math.round(Math.random() * 6) + 1);
  }, []);

  return (
    <>
      {showModal ? (
        <TransferModal
          onClose={() => setShowModal(false)}
          user={selectedUser}
          modalClose={closeModals}
        />
      ) : (
        <div className="users">
          {users?.map((user, index) => (
            <div
              key={index}
              className="users__row"
              onClick={() => handleModal(user)}
            >
              <div
                className={
                  user.imageURL ? "" : `user-background v-${background}`
                }
              >
                {user.imageURL ? (
                  <img src={user.imageURL} alt="user" className="user-image" />
                ) : (
                  <FontAwesomeIcon icon={faUser} className="users__icon" />
                )}
              </div>
              <p className="receiver-name">
                {user.first_name + " " + user.second_name}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
