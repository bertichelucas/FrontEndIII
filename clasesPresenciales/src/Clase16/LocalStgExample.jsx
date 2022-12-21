import React, {useState} from 'react'

const LocalStgExample = () => {

    const [user, setUser] = useState({
        name: 'pablo',
        email: 'pablo-gimenez@gmail.com',
        type: 'standard',
        score: 96
    })
    localStorage.setItem('user', JSON.stringify(user))
    return (
        <div>
            Example Local Storage
        </div>
    )
}

export default LocalStgExample