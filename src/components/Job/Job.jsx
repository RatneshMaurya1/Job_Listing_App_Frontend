import React, { useEffect, useState } from 'react'
import styles from "./job.module.css"
import { getJobs } from '../../services'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const [job,setjob] = useState([])
    const navigate = useNavigate()

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
                <img src={allJob.logoUrl} alt="" />
            </div>
            <div className={styles.details}> 
                <div className={styles.title}>
                    <h1>{allJob.jobPosition}</h1>
                </div>
                < div className={styles.span}>
                <span>₹ {allJob.salary}</span>
                <span> {allJob.location}</span>
                </div>
                <div className={styles.jobType}>
                    <p>{allJob.remoteOffice}</p>
                    <p>{allJob.jobType}</p>
                </div>
            </div>
            </div>
            <div className={styles.aboutSkills}>
                <div className={styles.skills}>
                    {allJob.skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div className={styles.detailsBtn}>
                    <button className={styles.detailsBtn1}>Edit job</button>
                    <button className={styles.detailsBtn2} onClick={() => navigate(`/JobDetails/${allJob._id}`)}>View details</button>
                </div>
                
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default Job
