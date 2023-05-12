import React , {useState, useEffect} from "react";
import './login.css'

const Login = () => {
    const [formValue, setFormValues] = useState({ username: '', password: '' });
    const [data, setData] = useState([]);


    const handleChange = event => {
      const { name, value } = event.target;
      setFormValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = event => {
      event.preventDefault();
      async function fetchData() {

        await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
          var dict = {};
          for(var i = 0; i < data.length; i += 1){
            dict[data[i].id] = data[i].address.geo.lat.slice(-4)
          }
          console.log(dict)
          setData(dict);
          console.log(data)
      })
    }
    fetchData()
    console.log(data)
    // if(formValue.username === data.us)
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