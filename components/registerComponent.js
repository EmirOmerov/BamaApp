import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
import styles from "../styles/Login.module.css";
import "mdbreact";

function RegisterComponent(props) {
  return (
    <MDBContainer className={styles.signUpcard}>
      <MDBRow>
        <MDBCol>
          <form>
            <div className={styles.inputReg}>
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Full Name:"
                icon="envelope"
                type="text"
                validate={true}
                error="wrong"
                success="right"
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Address:"
                icon="envelope"
                type="text"
                validate={true}
                error="wrong"
                success="right"
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="Country:"
                icon="envelope"
                type="text"
                validate={true}
                error="wrong"
                success="right"
              />
              <MDBInput
                containerClass="mb-0"
                size="lg"
                label="City:"
                icon="envelope"
                type="text"
                validate={true}
                error="wrong"
                success="right"
              />
              <MDBInput
                size="lg"
                label="Email:"
                icon="lock"
                type="password"
                validate
              />
            </div>
          </form>
          <div>
            <MDBBtn className={styles.BtnRegistration} color={"blue"}>
              Send Registration
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterComponent;
