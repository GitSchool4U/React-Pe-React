import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeePopup } from '../../store/features/popup/popup.slice';
import { useEffect, useState } from 'react';
import { postEmployee, updateEmployee } from '../../store/features/employee/employee.thunk';

const EmployeePopup = () => {

    const [formDetails, setFormDetails] = useState({
        profileUrl: '',
        name: '',
        email: '',
        bio: '',
        highlight: false
    })

    const dispatch = useDispatch();
    const popup = useSelector(state => state.popup.employeePopup)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (popup.id) {
            await dispatch(updateEmployee({
                id: popup.id,
                details: formDetails
            }))
        } else {
            await dispatch(postEmployee(formDetails))
        }
        dispatch(closeEmployeePopup())
    }

    useEffect(() => {
        if (!popup) {
            setFormDetails({
                profileUrl: '',
                name: '',
                email: '',
                bio: '',
                highlight: false
            })
        } else if (popup.id) {
            setFormDetails({
                profileUrl: popup.profileUrl,
                name: popup.name,
                email: popup.email,
                bio: popup.bio,
                highlight: false
            })
        }
    }, [popup])

    if (!popup) return null;

    return (
        <div onClick={() => dispatch(closeEmployeePopup())} className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center'>

            <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Employee Details</legend>

                <label className="label">Profile Url</label>
                <input name='profileUrl' value={formDetails.profileUrl} onChange={handleInputChange} type="text" className="input" placeholder="Profile Url" />

                <label className="label">Name</label>
                <input name='name' value={formDetails.name} onChange={handleInputChange} type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name='email' value={formDetails.email} onChange={handleInputChange} type="email" className="input" placeholder="Email" />

                <label className="label">Bio</label>
                <textarea name='bio' value={formDetails.bio} onChange={handleInputChange} className="textarea h-24" placeholder="Bio"></textarea>

                <button onClick={handleSubmit} className="btn btn-neutral mt-4">Submit</button>

            </fieldset>
        </div>
    )
}

export default EmployeePopup