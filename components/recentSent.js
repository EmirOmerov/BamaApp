import React from "react";
import styles from "../styles/Trans.module.css";

export default function RecentSent({ sentData }) {
  return (
    <div>
      <h3 className={styles.RSTtxt}>Recent Sent Transactions(RST):</h3>
      <div className={styles.RSTline}></div>
      <div className={styles.displayRecentData}>
        <ul className={styles.listStyle}>
          {sentData.map((data) => {
            console.log(data);
            return (
              <li key={data.sendName}>
                <h3>
                  <span style={{ color: "aqua" }}>Name:</span> {data.sendName}
                  <span style={{ color: "aqua", paddingLeft: "0.5rem" }}>
                    {" "}
                    Amount:
                  </span>{" "}
                  -{data.sAmount}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
