import React, { useState } from "react";
import styles from "../styles/Account.module.css";

export default function User({
  firstName,
  lastName,
  Email,
  Password,
  City,
  PostCode,
  Country,
  BankName,
  cardNumber,
  ExDate,
  CVC,
}) {
  const [showPass, setShowPass] = useState(false);
  const [changeBtnTitle, setBtnTitle] = useState(false);
  const handlePass = () => {
    setShowPass(!showPass);
    setBtnTitle(!changeBtnTitle);
  };
  return (
    <div className={styles.CurrentState}>
      <h4>
        <span className={styles.userTags}>Name: </span>
        <strong> {firstName}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Last Name: </span>
        <strong> {lastName}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Email: </span>
        <strong> {Email}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Password: </span>{" "}
        {showPass ? <strong> {Password}</strong> : "*******"}
        <button className={styles.showPassBtn} onClick={() => handlePass()}>
          {changeBtnTitle ? "Hide" : "Show"}
        </button>
      </h4>
      <h4>
        <span className={styles.userTags}>City: </span> <strong> {City}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>PostCode: </span>
        <strong> {PostCode}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Country: </span>{" "}
        <strong> {Country}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Bank: </span>{" "}
        <strong> {BankName}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Card Number: </span>
        <strong> {cardNumber}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>Expire Date: </span>{" "}
        <strong> {ExDate}</strong>
      </h4>
      <h4>
        <span className={styles.userTags}>CVC: </span> <strong> {CVC}</strong>
      </h4>
    </div>
  );
}
