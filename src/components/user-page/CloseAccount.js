import '../../styles/user-page/CloseAccount.css'
// import { Input,InputLeftAddon,FormControl,InputGroup,InputRightElement,Button } from '@chakra-ui/react';


const CloseAccount = function () {
  // const [show, setShow] = useState(false);
  // const handleClick = (e) => {
    //   e.preventDefault();
    //   setShow(!show)
    // };
    /* <button h="1.75rem" size="sm" onClick={handleClick}>
      {show ? "Hide" : "Show"}
    </button> */
    

    return (
      <div className="op-modal modal-closeaccount">
        <div className="amount">Are You Sure?</div>
        <div className="screen screen-closeaccount">
          <div className="modal-name">Close Account</div>
          <form className='modal__close-form'>
            <label>Email:</label>
            <input type='email'/>
            <label>Password:</label>
            <input type='password'/>

            <button type='submit' className='control-delete'>Delete</button>
          </form>
        </div>
      </div>
    );
}

export default CloseAccount;