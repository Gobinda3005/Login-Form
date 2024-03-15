import React,{useRef} from 'react'
import './App.css'

const Login = () => 
{
    const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(userRef.current.value,emailRef.current.value,passwordRef.current.value)
  }
  return (
    <div>
      <button type="button" class="btn btn-info">
      <form onSubmit={handleSubmit}>
      <input type="text" ref={userRef} placeholder="User Name"/><br /><br />
      <input type="email" name="" id="em" ref={emailRef} placeholder="Enter email" /><br /><br />
      <input type="password" name="" id="pwd" ref={passwordRef} placeholder="Enter Password" /><br /><br />
      <button type="submit">submit</button>
      </form>
      </button>
    </div>
  )
}

export default Login