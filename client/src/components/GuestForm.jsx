import { React, useState } from 'react'
import { postBooking } from '../service/BookingsService'

const GuestForm = ({addBooking}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkedin: false
  })

  const changeForm = (evt) => {
    const newFormData = Object.assign({}, formData);
    newFormData[evt.target.name] = evt.target.value;
    setFormData(newFormData)
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postBooking(formData)
    .then((data)=>{
      addBooking(data)
    })
    setFormData({
      name: '',
      email: '',
      checkedin: false
    })
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor='name'>Name: </label>
      <input 
        type='text'
        id='name' 
        name='name'
        onChange={changeForm}
        value={formData.name}
        required
        />
      <br/>
      <label htmlFor='email'>Email: </label>
      <input 
        type='text' 
        id='email' 
        name='email'
        onChange={changeForm}
        value={formData.email}
        required
        />
      <br/>
      <label htmlFor='checkedin'>Checked in? </label>
      <input 
        type='checkbox' 
        id='checkedin' 
        name='checkedin' 
        onChange={changeCheckInForm} 
        checked={formData.checkedin}></input>
      <button type='submit'>Add Guest</button>
    </form>
  )
}

export default GuestForm