import '../../../styles/user-page/PigFunctions.css'

const Add = function (props) {
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
export default Add;
