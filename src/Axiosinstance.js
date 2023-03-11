import axios from "axios";

const instance= axios.create(
    {
        baseURL:'https://react-demo-41a71-default-rtdb.firebaseio.com/post.json',
    }
)

instance.defaults.headers.common['Authorization']='Auth from instance';

export default instance;