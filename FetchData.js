import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchData() {
    const [post,setPost] = useState([])

    useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res) 
        setPost(res.data)
    })
    .catch(err => {
        console.log(err)
    })
})
  return (
    <div>
        <ul>
            {
                post.map(posts => (
                <li key={posts.id}>{posts.body}</li>
                ))}
        </ul>
    </div>
  )
}

export default FetchData