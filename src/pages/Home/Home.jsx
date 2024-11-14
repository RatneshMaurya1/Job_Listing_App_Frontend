import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import Search from "../../components/search/Search";
import Job from "../../components/Job/Job";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const {isLoggedIn,logIn,logOut} = useAuth()

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };
  const name = localStorage.getItem("name")

  return (
    <>
      <div className={styles.homeContainer}>
        <header className={styles.header}>
          <h1>Jobfinder</h1>
          {isLoggedIn ? (
            <div className={styles.loggedInHeader}>
              <button className={styles.logoutBtn} onClick={() => alert("Logged out!")}>Logout</button>
              <span>Hello! {name}</span>
            </div>
          ) : (
            <div className={styles.btn}>
              <button className={styles.btn1} onClick={handleSignIn}>
                Login
              </button>
              <button className={styles.btn2} onClick={handleSignUp}>
                Register
              </button>
            </div>
          )}
        </header>
        <Search />
        <Job />
      </div>
    </>
  );
};

export default Home;
