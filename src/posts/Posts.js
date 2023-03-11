import { Component } from "react";
import Post from "../post/Post";
import axios from "axios";
import Addpost from "./Addpost";

export default class Posts extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            posts:[],
            isAddpost:false,
        }
    }
     
    componentDidMount()
    {
        this.getpost();
    }

    //Method to get Post from URL
    getpost=()=>{
        axios.get('https://react-demo-41a71-default-rtdb.firebaseio.com/post.json')
        .then((res)=>
            {
                const posts=[];
                for(let key in res.data)
                {
                    posts.push({...res.data[key],id:key});
                }
                this.setState(
                    {
                        posts:posts,
                    }
                )
            }); 
    }
    
    //To delete a Post 
    DeleteHandler=(id,e)=>
    {   
        console.log("Clicked the button ");
         if(window.confirm("Are you sure you want to delete"))
         {
            axios.delete(`https://react-demo-41a71-default-rtdb.firebaseio.com/post/${id}.json`)
         .then(res=>this.getpost());
         }
    }


    render(){

        //Onclick to show create Post option
        const AddPost=()=>{
            this.setState(
               {
                   isAddpost:true,
               }
            )
   }


        //setting a local variable array to map all the data with Disply method
        const posts=this.state.posts.map(post=>
            {
                return <Post key={post.id} onDeletePost={this.DeleteHandler.bind(this,post.id)} post={post}/>   
            })


        return(
             <>
            <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl my-3">Posts Data</h1>
            <button type="button" onClick={AddPost}   className="btn btn-dark"><a href="#"  className="text-light text-decoration-none">Create Post</a></button>
            
            </div><br/>
            <div className="flex mx-2">
                {posts}
              
            </div>  
             {this.state.isAddpost && (
                <div>
                     <Addpost onPostAdd={this.getpost}/>
                </div>
               )}
        
             </>
        )
    }
}