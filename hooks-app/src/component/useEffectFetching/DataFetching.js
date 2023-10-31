import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            }).catch(err =>{
                console.log(err);
            })
    }, [idFromButtonClick])


  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
        <button type='button' onClick={handleClick}>Fetch post</button>
        {/* <ul>
            {
                posts.map(post => (<li key={post.id}>{post.title} </li>) )
            }
        </ul> */}
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetching