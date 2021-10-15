import React, { useState } from "react";
import styles from "../styles/Account.module.css";

export default function UserUpdate({
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePassword,
  updateCity,
  updatePostCode,
  updateCountry,
}) {
  const [changeName, setName] = useState("");
  const [changeLastName, setLastName] = useState("");
  const [changeEmail, setEmail] = useState("");
  const [changePassword, setPassword] = useState("");
  const [changeCity, setCity] = useState("");
  const [changePostCode, setPostCode] = useState("");
  const [changeCountry, setCountry] = useState("");

  const handleFirstName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const handlePostCode = (e) => {
    e.preventDefault();
    setPostCode(e.target.value);
  };

  return (
    <div className={styles.UpdateUserComponent}>
      <form className="form-inline" onSubmit={updateFirstName(changeName)}>
        <input
          onChange={handleFirstName}
          placeholder="First name..."
          type="text"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updateLastName(changeLastName)}>
        <input
          onChange={handleLastName}
          placeholder="Last name..."
          type="text"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updateEmail(changeEmail)}>
        <input
          onChange={handleEmail}
          placeholder="Email..."
          type="text"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updatePassword(changePassword)}>
        <input
          onChange={handlePassword}
          placeholder="Password..."
          type="number"
          min="0"
          maxLength="8"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updateCity(changeCity)}>
        <input
          onChange={handleCity}
          placeholder="City..."
          type="text"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updatePostCode(changePostCode)}>
        <input
          onChange={handlePostCode}
          placeholder="Post Code..."
          type="text"
          className={styles.inputData}
        />
      </form>
      <form className="form-inline" onSubmit={updateCountry(changeCountry)}>
        <input
          onChange={handleCountry}
          placeholder="Country..."
          type="text"
          className={styles.inputData}
        />
      </form>
    </div>
  );
}
