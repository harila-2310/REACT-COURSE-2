import axios from 'axios';
import React, { useState } from 'react'

export default function Addpost(props) {

    const[title,settitle]=useState('');
    const[description,Setdecsription]=useState('');

    const SubmitForm=(e)=>{
        e.preventDefault();
        const Postdata={title,description}  
        axios.post('https://react-demo-41a71-default-rtdb.firebaseio.com/post.json',Postdata)
        .then(res=>{
            props.onPostAdd();
        });
    }


  return (
    <div>
        <form onSubmit={SubmitForm}>
        <h1 className='text-bold text-black fs-6'>Create post</h1>
        <div>
        <label className="p-lg-2">Title :</label><br/>
        <input 
           type="text" value={title}
           onChange={(e)=>settitle(e.target.value)}
           className="border-2 p-1 border-primary"
           placeholder="Title"/>
        </div>
       <div>
       <label className="p-lg-2">Description :</label><br/>
        <textarea 
         placeholder="Description"  
         value={description}
         onChange={(e)=>{Setdecsription(e.target.value)}}
         className="border-2 p-1 border-primary">
         </textarea>
       </div>
       <div>
          <button type="submit" className="btn btn-danger">Create Post</button>
       </div>

        </form>

    </div>
  )
}
