import "../../../styles/user-page/Vault.css";

const Vault = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="vault-modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Vault;
