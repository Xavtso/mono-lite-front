const Loan = function (props) {
  const handleClose = function () {
  props.onClose()
  }
  

  return (
    <div  className="op-modal modal-loan">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <p className="amount amount-loan">
        10000 <span>$</span>
      </p>
      <div className="screen screen-loan"></div>
    </div>
  );
};

export default Loan;
