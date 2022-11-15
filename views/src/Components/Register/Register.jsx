import {useState} from 'react'
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [first, setFirst] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = e => {
    setFirst({...first, [e.target.name] : e.target.value})
  }
const onSubmit = e => {
  e.preventDefault()
  axios.post('http://localhost:5050/api/auth/register',{...first})
  .then((e)=>{
  alert(e.data)
  }).catch((error)=>{
    console.log(error.data.message)
  })

}
  return (
    <div>
      <h1 className='text-center'>Register</h1>
      <form className='col-8 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name='name' autoComplete='off' onChange={handleChange} />
        </div>
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

export default Register