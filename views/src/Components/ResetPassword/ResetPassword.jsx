import {useState} from 'react'
import axios from 'axios'

const ResetPassword = () => {
  const [third, setThird] = useState({
    last_password: "",
    new_password: "",
    confirm_new_password: "",
  })

  const handleChange = e =>{
    setThird({...third, [e.target.name] : e.target.value})
  }

  const onSubmit = e =>{
    e.preventDefault()
    axios.post('http://localhost:5050/api/auth/reset-password', {...third})
    .then((e)=>{
      console.log(e)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <h1 className='text-center'>Reset Password</h1>
      <form className='col-8 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Last Password</label>
          <input type="password" className="form-control" name='last_password' autoComplete='off'  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" name='new_password' autoComplete='off' onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm New Password</label>
          <input type="password" className="form-control" name='confirm_new_password' autoComplete='off' onChange={handleChange}/>
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

export default ResetPassword