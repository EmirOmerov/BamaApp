import React from "react";
import styles from "../styles/Home.module.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const FooterPage = () => {
  return (
    <div className={styles.footer}>
      <h5 className="title">B.A.M.A - Bank Account Managment Application</h5>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Emir Omerov
        </MDBContainer>
      </div>
    </div>
  );
};

export default FooterPage;
