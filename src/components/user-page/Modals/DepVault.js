const DepVault = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="create_pigModal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default DepVault;
