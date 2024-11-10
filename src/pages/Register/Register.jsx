import React, { useState } from 'react'
import styles from "./register.module.css"
import { register } from "../../services/index"
import toast from 'react-hot-toast'

const Register = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

 async function handleSubmit(e){
    e.preventDefault()
    try {
      const response = await register(formData)
      toast.success(response.message)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Create an account</h1>
        <h3>Your personal job finder is here</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' value={formData.name} onChange={(e) => (setFormData({...formData,name:e.target.value}))} />
          <input type="text" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData,email:e.target.value})} />
          <input type="text" placeholder='Mobile' value={formData.phone} onChange={(e) => setFormData({...formData,phone:e.target.value})} />
          <input type="text" placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData,password:e.target.value})} />
          <div>
          <input type="checkbox" name='checkbox' />
          <label htmlFor="checkbox">By creating an account, I agree to our terms of use and privacy policy</label>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
