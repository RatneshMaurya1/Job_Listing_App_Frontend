import React, { useState } from 'react'
import styles from "./register.module.css"
import { register } from "../../services/index"
import toast from 'react-hot-toast'

const Register = () => {
  const [checked,setCheked] = useState(false)
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })



 async function handleSubmit(e){
    e.preventDefault()
    if(formData.name.length === 0){
     return toast.error("Name is required")
    }
    if(!formData.email){
     return toast.error("Email is required")
    }else if(!formData.email.includes("@") || !formData.email.includes(".")){
     return toast.error("Email is invalid")
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      return toast.error("Phone number is invalid");
    }
    if(!formData.password){
      return toast.error("Password is required")
    }else if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
      return toast.error("Password is too weak");
    }
    if(!checked){
      return toast.error("You must agree to the terms and privacy policy")
    }
    try {
      const response = await register(formData)
      if(response.message === "user created successfully"){
        toast.success(response.message)
      }else{
        toast.error(response.message)
      }
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
          <input type="checkbox" name='checkbox' value={checked} onChange={(e) => (setCheked(e.target.checked))} />
          <label htmlFor="checkbox">By creating an account, I agree to our terms of use and privacy policy</label>
          </div>
          <button  type="submit">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
