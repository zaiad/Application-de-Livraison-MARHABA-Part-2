
import {useState} from 'react'
import axios from 'axios';

const Login = () => {
  const [second, setSecond] = useState ({
    email: "",
    password: ""
  })

  const handleChange = e =>{
    setSecond({...second, [e.target.name] : e.target.value})
  }
  const onSubmit = e =>{
    e.preventDefault()
    axios.post('http://localhost:5050/api/auth/login', {...second})
    .then((e)=>{
      console.log(e.data)
    }).catch((error)=>{
      console.log(error.data.message)
    })
  }


  return (
    <div>
      <h1 className='text-center'>Login</h1>
      <form className='col-8 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='password' autoComplete='off' onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
