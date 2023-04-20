const Transfer = function (props) {

      const handleClose = function () {
        props.onClose();
      };

    return (
      <div className="op-modal modal-transfer">
        <button className="btn--close-modal" onClick={handleClose}>
          &times;
        </button>
        <div className="screen screen-transfer">
          <div className="amount amount-transfer"></div>
        </div>
      </div>
    );
};

export default Transfer;
