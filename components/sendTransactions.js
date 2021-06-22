import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import styles from "../styles/Trans.module.css";

export default function SendTransactions({ updateST }) {
  const [newName, setName] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAmount = (e) => {
    setNewAmount(e.target.value);
  };
  return (
    <div className={styles.sendTransactionsComponent}>
      <h3 className={styles.sendTotxt}>Send to:</h3>
      <form className="form-inline">
        <input
          onInput={handleName}
          placeholder="Name:"
          type="text"
          className={styles.inputSTData}
        />
      </form>
      <form className="form-inline">
        <input onInput={handleAmount} placeholder="Amount:" type="number" />
      </form>
      <MDBBtn
        onClick={() => updateST(newName, newAmount)}
        color={"blue"}
        className={styles.sendSTbtn}
      >
        Send
      </MDBBtn>
    </div>
  );
}
