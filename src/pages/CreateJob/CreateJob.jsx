import styles from "./createJob.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import arrow from "../../assets/arrow.png";

const CreateJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    logoUrl: "",
    jobPosition: "",
    salary: "",
    jobType: "",
    remoteOffice: "",
    location: "",
    description: "",
    about: "",
    skills: [""],
    information: "",
  });
  const navigate = useNavigate();
  const handleSkillsOption = (skill) => {
    setShowSkills(!showSkills);
    setValue((prev) => (prev.includes(skill) ? prev : [...value, skill]));
  };

  const removeSkill = (skill) => {
    setValue((prev) => prev.filter((s) => s !== skill));
  };
  const clearSkill = () => {
    setValue([]);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await login(formData);
      if (response.message === "Logged in successfully") {
        toast.success(response.message);
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Add job description</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.company}>
            <label htmlFor="company">Company Name </label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name here"
            />
          </div>
          <div className={styles.url}>
            <label htmlFor="url">Enter the link</label>
            <input type="text" id="url" placeholder="Enter the link" />
          </div>
          <div className={styles.jobPosition}>
            <label htmlFor="jobPosition">Job position</label>
            <input
              type="text"
              id="jobPosition"
              placeholder="Enter job position"
            />
          </div>

          <div className={styles.salary}>
            <label htmlFor="salary">Monthly salary</label>
            <input
              type="text"
              id="salary"
              placeholder="Enter Amount in rupees"
            />
          </div>

          <div className={styles.jobTypes}>
            <label htmlFor="jobType">Job Type</label>
            <select name="jobType" id="jobType">
              <option value="Select" disabled>
                Select
              </option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className={styles.remoteOffice}>
            <label htmlFor="remoteOffice">Remote/office</label>
            <select name="remoteOffice" id="remoteOffice">
              <option value="Select" disabled>
                Select
              </option>
              <option value="office">office</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className={styles.location}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Enter Location" />
          </div>

          <div className={styles.description}>
            <label htmlFor="description">Job Description</label>
            <textarea id="jobDescription" name="jobDescription" placeholder="Type the job description" rows="5"></textarea>
          </div>

          <div className={styles.about}>
            <label htmlFor="about">About Company</label>
            <textarea               type="text"
              id="about"
              name="about"
              placeholder="Type about your company"></textarea>
          </div>
          <div className={styles.list}>
            <h1>Skills Required</h1>
            <div className={styles.showSkills}>
              <div
                className={styles.haveSkills}
                onClick={() => setShowSkills(!showSkills)}
              >
                <p>Enter the must have skills </p>
            
                <img src={arrow} alt="" />
                
              </div>
              {showSkills && (
                <ul>
                  {["Frontend", "Backend", "CSS", "JavaScript"].map(
                    (skill, index) => (
                      <li key={index}  onClick={() => handleSkillsOption(skill)}>
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              )}
              <div className={styles.li}>
              {value.map((val, index) => (
                <div className={styles.selectedSkills} key={index}>
                  <p>{`${val}`}</p>
                  <button onClick={() => removeSkill(val)}>X</button>
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className={styles.information}>
            <label htmlFor="information">Information</label>
            <input
              type="text"
              id="information"
              placeholder="Enter the additional information"
            />
          </div>

          <div className={styles.formBtn}>
        
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "+ Add Job"}
          </button>
          </div>
        </form>
      </div>
      <div className={styles.register_img}>
        <div className={styles.h1}>
          <h1>Recruiter add job details here</h1>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
