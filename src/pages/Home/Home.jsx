import React, { useState } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

const Home = () => {
  const [value, setValue] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleSkillsOption = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setValue(selectedOptions);
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <header className={styles.header}>
          <h1>Jobfinder</h1>
          <div className={styles.btn}>
            <button className={styles.btn1} onClick={handleSignIn}>
              Login
            </button>
            <button className={styles.btn2} onClick={handleSignUp}>
              Register
            </button>
          </div>
        </header>

        <div className={styles.skillContainer}>
          <div className={styles.skillWrapper}>
            <div className={styles.searchInput}>
              <FiSearch className={styles.searchIcon} />
              <input type="text" placeholder="Type any job title" />
            </div>
            <div className={styles.skills}>
                {!showSkills && <p onClick={() => (setShowSkills(true))}>skills</p>}
              {showSkills && (
                <ul value={value} onChange={handleSkillsOption}>
                  <li value="">skills</li>
                  <li value="frontend">frontend</li>
                  <li value="backend">backend</li>
                </ul>
              )}
              {value.map((val, index) => (
                <p key={index}>{val}</p>
              ))}
              <div className={styles.skillsBtn}>
                <button className={styles.skillsBtn1}>Apply Filter</button>
                <button className={styles.skillsBtn2}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
