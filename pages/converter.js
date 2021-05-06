import React from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Converter.module.css";
import Converter from "../components/converterComponent";
import ChartComponent from "../components/chart";
import { MDBBtn } from "mdbreact";
import FooterPage from "../components/footer";
export default function converter() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className={styles.converterText}>Converter:</h2>
        <Converter />
      </div>
      <div className={styles.chartComponent}>
        <h2 className={styles.chartText}>Shopping sites(Amount):</h2>
        <ChartComponent />
      </div>
      <div className={styles.reportProblem}>
        <form>
          <h3 className={styles.reportLabel}>Report a problem:</h3>
          <input type="text" className={styles.inputReport}></input>
          <MDBBtn
            className={styles.reportBtn}
            gradient="blue"
            rounded
            onClick={() => {
              return alert("Your Report has been sent!");
            }}
          >
            Send Report
          </MDBBtn>
        </form>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
