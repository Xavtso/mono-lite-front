import { useEffect, useState } from "react";
import "../../styles/user-page/UsersList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import TransferModal from "./TransferModal";

const UsersList = function (props) {
  const [background, setBackground] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModals = function () {
    props.modalClose()
  }

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
            {props.users.map((user, index) => (
            <div
              key={index}
              className="users__row"
              onClick={() => handleModal(user)}
            >
              <div className={user.imageURL ? '' : `user-background v-${background}`}>
                {user.imageURL ? <img src={user.imageURL} alt='user' className="user-image" />
                :
                <FontAwesomeIcon icon={faUser} className="users__icon" />
                }
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
