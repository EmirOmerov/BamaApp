import styles from "../styles/Login.module.css";
import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
import RegisterComponent from "../components/registerComponent";

export default function Login(props) {
  const [register, setRegister] = useState(false);
  const { password, setPassword, email, setEmail, handleLogin } = props;
  const [changeBtnTitle, setBtnTitle] = useState(false);

  const showRegister = () => {
    setRegister(!register);
    setBtnTitle(!changeBtnTitle);
  };

  const welcomeTitle = () => {
    return (
      <div className={styles.welcometxt}>
        <p className={styles.textUnder}>
          Welcome to <strong id="bamatxt">B.A.M.A.</strong>
        </p>
        <p>Your Personal Financial Assistent</p>
        <p className={styles.devText}>
          Developed by: <strong id="devName">Emir Omerovic</strong>
        </p>
      </div>
    );
  };
  return (
    <MDBContainer className={styles.mdbcard}>
      <div className={styles.imageCon}>
        <img src={"/novilogo.png"} />
      </div>
      <MDBRow className={styles.mdbrow}>
        <MDBCol className={styles.mdbcol}>
          <form>
            <div className={styles.mdbinput}>
              <MDBInput
                size="lg"
                label="Type your email:"
                icon="envelope"
                type="email"
                validate={true}
                error="wrong"
                success="right"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
              <MDBInput
                size="lg"
                label="Type your password:"
                icon="lock"
                type="password"
                validate
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={styles.LogBtns}>
              <MDBBtn
                color={"blue"}
                onClick={() => {
                  if (!email) {
                    return alert("You are not registered");
                  } else {
                    return handleLogin();
                  }
                }}
              >
                Login
              </MDBBtn>
              <MDBBtn onClick={() => showRegister()}>
                {changeBtnTitle ? "Cancel" : "Register"}
              </MDBBtn>
              {register ? <RegisterComponent /> : welcomeTitle()}
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
