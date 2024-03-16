import React,{useState} from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Login from "./Login";

const App = () => {
	const [formDetails, setFormDetails] = useState({
		username: "",
		email: "",
		password: "",
  })
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  })
  const change = (e) =>
  {
    const { name, value } = e.target
    
    setFormDetails({...formDetails,[name]:value})
  }
  const submit = (e) =>
  {
    e.preventDefault()
    if (formDetails.password.length<6) {
		
				setFormErrors({
					formErrors,
					password: "please enter minimum 6 characters",
				})
		}
    console.log(formDetails)
  }
	return (
    <div>
    <Navbar />
    <div className='forms'>
    <button type="button" className="btn btn-secondary"><p className="btn btn-dark"></p>
    <div className="registration-form">
      <div className='title'>
      </div>
		<div>
      <div className="hedding">
      <p class="text-warning"><h1>Sign Up</h1></p>
      </div>
			<form
				className='myForm'
				onSubmit={submit}>

        <label htmlFor="username">User name</label>
        <form>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id='un' placeholder="First name" onChange={change} />
          </div>
          <div className="col">
            <input type="text" className="form-control" id='unn' placeholder="Last name" onChange={change} />
          </div>
        </div>
        </form>
				
				{formErrors.username && <p className='error'>{formErrors.username}</p>}
				<br />
				<br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={change}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
				{formErrors.email && <p className='error'>{formErrors.email}</p>}
				<br />
				<br />
        <div className="form-group">
           <label htmlFor="exampleInputPassword1">Password</label>
           <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={change} />
        </div>
				{formErrors.password && <p className='error'>{formErrors.password}</p>}
        {/* <br />
        <br /> */}
    {/* <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gd1" value="option1" checked onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gd2" value="option2" onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios2">
            Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gd3" value="option3" onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios3">
            Prefare not to say
          </label>
        </div>
      </div>
    </div>
  </fieldset> */}
  <br />
  <br />
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Select Course</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios1">
            Web Full-Stack
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios2">
            Testing
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" onChange={change}/>
          <label className="form-check-label" htmlFor="gridRadios3">
          Other
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <br />
  <br />
  <label htmlFor="exampleInputEmail1">If Other please select</label>
  <form>
  <div className="form-row align-items-center">
    <div className="col-auto my-1">
      <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option defaultValue>Choose...</option>
        <option value="1">React</option>
        <option value="2">Angular</option>
        <option value="4">DEV</option>
        <option value="5">.NET</option>
        <option value="6">HTML</option>
        <option value="7">UI UX</option>
        <option value="8">JS</option>
      </select>
    </div>
    <br />
    <br />
    <label htmlFor="exampleInputEmail1">Uplode Your Demo priject</label>
    <div className="custom-file">
    <button type="button" className="btn btn-outline-danger"><input type="file" className="custom-file-input" id="customFile" /></button>
     {/* <label class="custom-file-label" htmlFor="customFile"></label> */}
    </div>
    <br />
		<br />
    <form className="was-validated">
  <div className="custom-control custom-checkbox mb-3">
    <input type="checkbox" className="custom-control-input" id="customControlValidation1" required onChange={change}/>
    <label className="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>
    <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    </form>
    <br />
    <br />
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Subscription</h5>
        <h6 className="card-subtitle mb-2 text-muted">Login Form</h6>
        <p className="card-text">If your already mamber of this site then please select Login for directly go through our site. </p>
        <button type="button" className="btn btn-warning"><p className="btn btn-dark">Login</p><Login /></button>
        <button type="button" class="btn btn-light"><a href="https://lg007.netlify.app/" className="card-link">Login Manually</a></button>
      </div>
    </div>
  </div>
</form>
				<br />
				<br />
        
			</form>
		</div>
    </div>
    </ button>
    </div>
    </div>
	)
}

export default App