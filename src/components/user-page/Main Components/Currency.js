const Currency = function (props) {
  return (
    <div className="op-modal modal-closeaccount">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount">Are You Sure?</div>
      <div className="screen screen-closeaccount"></div>
    </div>
  );
};
export default Currency;
