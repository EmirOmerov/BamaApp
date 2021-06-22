import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
import styles from "../styles/Login.module.css";
import "mdbreact";
import fire from "../components/firebase/fire";

function RegisterComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUser = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((errot) => {
        console.log(error);
      });
  };

  return (
    <MDBContainer className={styles.signUpcard}>
      <MDBRow>
        <MDBCol>
          <form>
            <div className={styles.inputReg}>
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="First Name:"
                icon="envelope"
                type="text"
                validate={true}
                onChange={(e) => {
                  e.preventDefault();
                  setFirstName(e.target.value);
                }}
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Last Name:"
                icon="envelope"
                type="text"
                validate={true}
                onChange={(e) => {
                  e.preventDefault();
                  setLastName(e.target.value);
                }}
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Adress:"
                icon="envelope"
                type="text"
                validate={true}
                error="wrong"
                success="right"
                onChange={(e) => {
                  e.preventDefault();
                  setAdress(e.target.value);
                }}
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Email:"
                icon="envelope"
                type="text"
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
                label="Password:"
                icon="lock"
                type="password"
                validate={true}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <div>
            <MDBBtn
              className={styles.BtnRegistration}
              color={"blue"}
              onClick={() => createUser()}
            >
              Send Registration
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterComponent;
