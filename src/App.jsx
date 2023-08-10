
import { useState } from 'react'
import './App.css'

  const App = () => {

    const [values, setValues] = useState({
      firstName:"",
      lastName:"",
      email:"",
    })

    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(true)


    const handleFirstName = (event) => {
      setValues({...values, firstName: event.target.value})
    }

    const handleLastName = (event) => {
      setValues({...values, lastName: event.target.value})
    }

    const handleEmail = (event) => {
      setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      setSubmitted(true)

      if (values.firstName != "" && values.lastName != "" && values.email != ""){
        setValid(false)
      }
      else {
        setValid(true)
      }
    }
    
    

    return (
      <>
        <main>
          {submitted && !valid ? <div className='success'>Success! Thank you for registering.</div> : null}
          <form onClick={handleSubmit}>
            <input type='text' placeholder='First Name' value={values.firstName} onChange={handleFirstName}></input>
          {submitted && !values.firstName ? <p className='error'>Please enter a first name</p> : null}  
            <input type='text' placeholder='Last Name' value={values.lastName} onChange={handleLastName}></input>
          {submitted && !values.lastName ? <p className='error'>Please enter a last name</p> : null} 
            <input type="email" placeholder='Email' value={values.email} onChange={handleEmail}></input>
          {submitted && !values.email ? <p className='error'>Please enter an email</p> : null} 
            <button>Register</button>
          </form>
        </main>
      </>
    )
  }

export default App
