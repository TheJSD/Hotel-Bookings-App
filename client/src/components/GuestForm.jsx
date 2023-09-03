import { React, useState } from 'react'

const GuestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkedin: false
  })

  const changeForm = (evt) => {
    const newFormData = Object.assign({}, formData);
    newFormData[evt.target.name] = evt.target.value;
    setFormData(newFormData)
    console.log(formData)
  }

  const changeCheckInForm = (evt) => {
    const newFormData = Object.assign({}, formData)
    if (evt.target.checked == true) {
      newFormData.checkedin = true
    } else {
      newFormData.checkedin = false
    }
    setFormData(newFormData)
  }

  return (
    <form>
      <label htmlFor='name'>Name: </label>
      <input 
        type='text'
        id='name' 
        name='name'
        onChange={changeForm}
        value={formData.name}/>
        
      <label htmlFor='email'>Email: </label>
      <input 
        type='text' 
        id='email' 
        name='email'
        onChange={changeForm}
        value={formData.email}

      />
      <label htmlFor='checkedin'>Checked in? </label>
      <input 
        type='checkbox' 
        id='checkedin' 
        name='checkedin' 
        onChange={changeCheckInForm} 
        checked={formData.checkedin}></input>
      <button type='submit' onClick={(evt) => console.log(evt)}>Add Guest</button>
    </form>
  )
}

export default GuestForm