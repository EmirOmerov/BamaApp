import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import styles from "../styles/Trans.module.css";

export default function RecieveTransactions({ updateRT }) {
  const [newUser, setNewUser] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const handleUser = (e) => {
    setNewUser(e.target.value);
  };

  const handleAmount = (e) => {
    setNewAmount(e.target.value);
  };
  return (
    <div className={styles.recieveTransactionComponent}>
      <h3 className={styles.sendTotxt2}>Request from:</h3>
      <form className="form-inline">
        <input
          onInput={handleUser}
          placeholder="Name:"
          type="text"
          className={styles.inputRTData}
        />
      </form>
      <form className="form-inline">
        <input onInput={handleAmount} placeholder="Amount:" type="number" />
      </form>
      <MDBBtn
        onClick={() => updateRT(newUser, newAmount)}
        color={"blue"}
        className={styles.recieveRTbtn}
      >
        Send
      </MDBBtn>
    </div>
  );
}
