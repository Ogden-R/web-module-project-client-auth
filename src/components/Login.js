import React from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const { push } = useHistory();

    const [info, setInfo] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost3000/api/login', info)
            .then(resp => {
                localStorage.setItem("token", resp.data.payload);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (<div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            onChange={handleChange} 
            name="username" 
            id="username"
            />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            onChange={handleChange} 
            name="password" 
            type="password" 
            id="password"
            />
        </div>
        <button>Submit</button>
      </form>
    </div>)
  }

  export default Login;