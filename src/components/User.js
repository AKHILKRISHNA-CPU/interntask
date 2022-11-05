import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
            <button type="button" class="btn btn-primary">GET/EDIT</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleDelete} type="button" class="btn btn-danger">DELETE</button>
            </span>
        </div>
    )
}
export default User
