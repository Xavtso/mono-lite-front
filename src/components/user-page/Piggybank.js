const Piggybank = function (props) {

    const handleClose = function () {
      props.onClose();
    };

    return (
      <div className="op-modal modal-piggybank">
        <button className="btn--close-modal" onClick={handleClose}>
          &times;
        </button>
        <div className="screen screen-piggybank">
          <div className="amount piggybank-amount"></div>
        </div>
      </div>
    );
};

export default Piggybank;
