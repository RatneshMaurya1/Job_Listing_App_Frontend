import React, { useEffect, useState } from 'react'
import styles from "./job.module.css"
import logo from "../../assets/Logo.png"
import { useAuth } from '../../Context/AuthProvider'
import { getJobs } from '../../services'

const Job = () => {
    const {isLoggedIn} = useAuth() 
    const [job,setjob] = useState([])

    useEffect( () => {
        const job = async () =>{
            try {
                const response = await getJobs()
                setjob(response)
            } catch (error) {
                console.log(error)
            }

        }
        job()
    },[])
  return (
    <>
    {job.map((allJob) => (
        <div className={styles.jobContainer} key={allJob._id}>
        <div className={styles.jobWrapper}>
            
            <div className={styles.aboutJob}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.details}> 
                <div className={styles.title}>
                    <h1>{allJob.title}</h1>
                </div>
                < div className={styles.span}>
                <span>₹ {allJob.salary}</span>
                <span> {allJob.location}</span>
                </div>
                <div className={styles.jobType}>
                    <p>office</p>
                    <p>full-time</p>
                </div>
            </div>
            </div>
            <div className={styles.aboutSkills}>
                <div className={styles.skills}>
                <p>Frontend</p>
                <p>Backend</p>
                <p>CSS</p>
                <p>JavaScript</p>
                </div>
                <div className={styles.detailsBtn}>
                    {isLoggedIn && <button className={styles.detailsBtn1}>Edit job</button>}
                    <button className={styles.detailsBtn2}>View details</button>
                </div>
                
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default Job
