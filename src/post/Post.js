export default function Post (props)
{
    return(
         <div className="mx-2 my-2 p-3 border p-3 border-danger flex-1 d-inline-block">
            <div>Id :{props.post.id}</div>
            <div>Title :{props.post.title}</div>
            <div>Description :{props.post.description}</div>
            <div className="text-right"><button onClick={props.onDeletePost} className="btn btn-danger">Delete</button></div>
            
         </div>
    )
}