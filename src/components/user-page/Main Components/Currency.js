import '../../../styles/user-page/Currency.css'


const Currency = function (props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="currency-modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      {/* <div className="amount">Are You Sure?</div> */}
      {/* <div className="screen screen-closeaccount"></div> */}
    </div>
  );
};
export default Currency;
