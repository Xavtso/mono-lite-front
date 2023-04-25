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

  useEffect(() => {
    setBackground(Math.round(Math.random() * 6) + 1);
  }, []);

  return (
    <>
      {showModal ? (
        <TransferModal
          onClose={() => setShowModal(false)}
          user={selectedUser}
        />
      ) : (
        <div className="users">
          {props.users.map((user, index) => (
            <div
              key={index}
              className="users__row"
              onClick={() => handleModal(user)}
            >
              <div className={`user-background v-${background}`}>
                <FontAwesomeIcon icon={faUser} className="users__icon" />
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
