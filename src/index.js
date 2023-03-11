import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

// axios.defaults.baseURL='https://react-demo-41a71-default-rtdb.firebaseio.com/post.json';
// axios.defaults.headers.common['Authorisation']='Auth access';

axios.interceptors.request.use((request)=>{
  console.log(request);
  return request
})

axios.interceptors.response.use((response)=>{
  console.log(response);
  response.headers.channelName="Harila";
  return response
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
