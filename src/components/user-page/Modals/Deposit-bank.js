const DepositBank = function (props) {

      const handleClose = function () {
        props.onClose();
      };

  return (
    <div className="op-modal modal-deposit-bank">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount amount-deposit-bank">1000$</div>
      <div className="screen screen-deposit-bank"></div>
    </div>
  );
};

export default DepositBank;
