import './DeleteAgreeModal.css'

const DeleteAgreeModal = function (props) {

    const agreeDelete = function () {
        props.handleForm();
    }
    const disagreeDelete = function () {
        props.closeModal();
    }

    return (
        <div className='warning'>
            <p >All your data will be deleted permanently with no chance to recover <br /></p>
                <span>Want to continue?</span>
            <div className='controls'>
                <button className='btn btn-agree' onClick={agreeDelete}>Yes</button>
                <button className='btn' onClick={disagreeDelete}>Cancel</button>
            </div>
        </div> 
    )
}

export default DeleteAgreeModal;