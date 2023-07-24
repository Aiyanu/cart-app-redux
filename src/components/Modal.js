import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
import { close } from "../redux/actions/modalActions";

const Modal = () => {
    const dispatch = useDispatch()
    // console.log(dispatch(close()));
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={() => {
                        dispatch(clearCart())
                        dispatch(close())
                    }}>
                        confirm
                    </button>
                    <button type='button' className='btn clear-btn' onClick={() => dispatch(close())}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;