import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Axios = () => {

    const [comments, setComments] = useState([])
    const rootUrl = 'https://jsonplaceholder.typicode.com'
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get(rootUrl + '/comments')
        .then(res => setComments(res.data))
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios({
            method: 'post',
            url: rootUrl + '/posts',
            data: post
        }).then(data => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" onChange={(e) => setPost({...post, name: e.target.value})}/>
                <label>body</label>
                <input type="text" onChange={(e) => setPost({...post, body: e.target.value})}/>
                <label>email</label>
                <input type="email" onChange={(e) => setPost({...post, email: e.target.value})} />
                <label>ID</label>
                <input type="number" onChange={(e) => setPost({...post, id: e.target.value})} />
                <label>post ID</label>
                <input type="number" onChange={(e) => setPost({...post, postid: e.target.value})}/>
                <button>Enviar</button>
            </form>

            {
                comments.map(comment => <li>{comment.name}</li>)
            }
        </div>
    )
}

export default Axios