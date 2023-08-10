
import { useState } from 'react'
import './App.css'

  const App = () => {

    const [values, setValues] = useState({
      firstName:"",
      lastName:"",
      email:"",
    })

    const [sumbitted, setSubmitted] = useState(false)

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
      event.preventDefault()
    }


    return (
      <>
        <main>
          {sumbitted ? <div className='success'>Success! Thank you for registering.</div> : null}
          <form onClick={handleSubmit}>
            <input type='text' placeholder='First Name' value={values.firstName} onChange={handleFirstName}></input>
            <p className='error'>Please enter a first name</p>
            <input type='text' placeholder='Last Name' value={values.lastName} onChange={handleLastName}></input>
            <p className='error'>Please enter a last name</p>
            <input type="email" placeholder='Email' value={values.email} onChange={handleEmail}></input>
            <p className='error'>Please enter an email address.</p>
            <button>Register</button>
          </form>
        </main>
      </>
    )
  }

export default App
