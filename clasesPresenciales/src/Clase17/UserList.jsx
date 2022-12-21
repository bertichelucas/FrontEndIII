import React, {useReducer, useState} from 'react'

const initialState = {
    users:
    [
        {id: 1, userName: 'genaro', email: 'genaro@gmail.com'},
        {id: 2, userName: 'genaro2', email: 'genaro2@gmail.com'},
        {id: 3, userName: 'genaro3', email: 'genaro3@gmail.com'},
    ]
}

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        default:
            throw new Error()
    }
}


const UserList = () => {

    const [newUser, setNewUser] = useState({
        id: null,
        userName: '',
        email: ''
    })

    const [userState, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) =>{
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: 'ADD_USER', payload: newUser})
    }

    console.log(userState)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name='id' onChange={handleChange}/>
                <input type="text" name='userName' onChange={handleChange}/>
                <input type="email" name='email' onChange={handleChange}/>
                <button>Añadir usuario</button>
            </form>
        </div>
    )
}

export default UserList