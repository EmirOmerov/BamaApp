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
    setName(e.target.value);
    e.preventDefault();
  };

  const firstNameHandle = (e) => {
    updateFirstName(changeName);
    e.preventDefault();
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.preventDefault();
  };

  const lastNameHandle = (e) => {
    updateLastName(changeLastName);
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const emailHandle = (e) => {
    updateEmail(changeEmail);
    e.preventDefault();
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
  };

  const passwordHandle = (e) => {
    updatePassword(changePassword);
    e.preventDefault();
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    e.preventDefault();
  };

  const cityHandle = (e) => {
    updateCity(changeCity);
    e.preventDefault();
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    e.preventDefault();
  };

  const countryHandle = (e) => {
    updateCountry(changeCountry);
    e.preventDefault();
  };
  const handlePostCode = (e) => {
    setPostCode(e.target.value);
    e.preventDefault();
  };

  const postCodehandle = (e) => {
    updatePostCode(changePostCode);
    e.preventDefault();
  };

  return (
    <div className={styles.UpdateUserComponent}>
      <form className="form-inline" onSubmit={firstNameHandle}>
        <input
          onChange={handleFirstName}
          placeholder="First name..."
          type="text"
          className={styles.inputData}
        />
        <button
          type="submit"
          id="btn-LastNameEditConfirm"
          className={styles.inputBtn}
        >
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={lastNameHandle}>
        <input
          onChange={handleLastName}
          placeholder="Last name..."
          type="text"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={emailHandle}>
        <input
          onChange={handleEmail}
          placeholder="Email..."
          type="text"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={passwordHandle}>
        <input
          onChange={handlePassword}
          placeholder="Password..."
          type="number"
          min="0"
          maxLength="8"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={cityHandle}>
        <input
          onChange={handleCity}
          placeholder="City..."
          type="text"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={postCodehandle}>
        <input
          onChange={handlePostCode}
          placeholder="Post Code..."
          type="text"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
      <form className="form-inline" onSubmit={countryHandle}>
        <input
          onChange={handleCountry}
          placeholder="Country..."
          type="text"
          className={styles.inputData}
        />
        <button id="btn-LastNameEditConfirm" className={styles.inputBtn}>
          Save
        </button>
      </form>
    </div>
  );
}
