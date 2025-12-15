import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {

    const {users, error} = useSelector(state=>state.user)
    console.log(users, error)
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    return (
        <div>Users</div>
    )
}

export default Users