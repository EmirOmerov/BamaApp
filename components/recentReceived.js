import React from "react";
import styles from "../styles/Trans.module.css";

export default function RecentReceived({ recieveData }) {
  return (
    <div>
      <h3 className={styles.RRTtxt}>Recent Received Transactions(RRT):</h3>
      <div className={styles.RRTline}></div>
      <div className={styles.displeyRRT}>
        <ul className={styles.listRRTStyle}>
          {recieveData.map((data) => {
            console.log(data);
            return (
              <li key={data.recieveName}>
                <h3>
                  <span style={{ color: "aqua" }}>Name:</span>{" "}
                  {data.recieveName}
                  <span style={{ color: "aqua", paddingLeft: "0.5rem" }}>
                    {" "}
                    Amount:
                  </span>{" "}
                  {data.rAmount}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
