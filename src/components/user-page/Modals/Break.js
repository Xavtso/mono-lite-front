import "../../../styles/user-page/PigFunctions.css";

const Break = function (props) {
  const handleClose = () => {
    props.onClose();
  };
  return (
    <div className="func_modal">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};
export default Break;
