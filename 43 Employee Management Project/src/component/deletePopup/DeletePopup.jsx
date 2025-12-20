import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../../store/features/popup/popup.slice';
import { deleteEmployee } from '../../store/features/employee/employee.thunk';

const EmployeePopup = () => {

    const dispatch = useDispatch();
    const popup = useSelector(state => state.popup.deletePopup)

    const handleConfirmation = async () =>{
        await dispatch(deleteEmployee(popup))
        dispatch(closeDeletePopup())
    }

    if (!popup) return null;

    return (
        <div onClick={() => dispatch((closeDeletePopup()))} className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center'>

            <div onClick={(e)=>e.stopPropagation()} className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Delete</h2>
                    <p>Are you sure you want to delete this?</p>

                    <div className="justify-end card-actions mt-6">
                        <button onClick={() => dispatch(closeDeletePopup())} className="btn btn-primary">No</button>
                        <button onClick={handleConfirmation} className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeePopup