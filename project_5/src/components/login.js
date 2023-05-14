import React , {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const [formValue, setFormValues] = useState({ username: '', password: '' });
    const [data, setData] = useState();
    const navigate = useNavigate();


    const handleChange = event => {
      const { name, value } = event.target;
      setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = event => {
      event.preventDefault();
      async function fetchData() {

        await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(all_data => {
          console.log(all_data.find(user => user.username === formValue.username))
          var dict = {};
          for(var i = 0; i < all_data.length; i += 1){
            dict[all_data[i].username] = all_data[i].address.geo.lat.slice(-4)
          }
          setData(all_data);
          console.log(data, "111111111111")
          if(formValue.username in dict){
            if (dict[formValue.username] === formValue.password){
              localStorage.setItem("user", JSON.stringify(all_data.find(user => user.username === formValue.username)));
              console.log("navigate")
              navigate('/application');
            } else {
              throw("username or password wrong. 111")
            }
          } else {
            throw("username or password wrong. 222")
          }
          console.log(data, "2222222222222")
      }).catch(err => alert(err))
      }
      fetchData()
      // if(formValue.username in data){
      //   if (data[formValue.username] === formValue.password){
      //     localStorage.setItem("user", JSON.stringify(formValue));
      //     console.log("navigate")
      //     navigate('/application');
      //   } else {
      //     alert("username or password wrong. 111")
      //   }
      // } else {
      //   alert("username or password wrong. 222")
      // }

    }




    return (
        <form onSubmit={handleSubmit} className="form-box">
          <label>
            Username:
            <input type="text"  name="username" className="input-field" value={formValue.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" className="input-field"  value={formValue.password} onChange={handleChange} />
          </label>
          <br />
          <div className="connect">
          <button type="submit" className="btn-field connect">Log in</button>
          </div>
        </form>
      );
}

export default Login;