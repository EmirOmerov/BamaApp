import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import fire, { db } from "../components/firebase/fire";
import styles from "../styles/Account.module.css";
import User from "../components/user";
import { MDBBtn } from "mdbreact";
import BankCard from "../components/bankCard";
import FooterPage from "../components/footer";

export default function Account() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [changeUpdatetxt, setUpdatetxt] = useState(false);
  const dbFire = fire.database().ref("Users/");
  const [userObject, setUserObject] = useState([]);

  const getData = () => {
    dbFire.on("value", (snapshot) => {
      const dataArray = [];
      snapshot.forEach((childsnap) => {
        const data = childsnap.val();
        dataArray.push({
          key: data.key,
          firstName: data.firstName,
          lastName: data.lastName,
          Email: data.Email,
          Password: data.Password,
          BankName: data.BankName,
          CVV: data.CVV,
          City: data.City,
          Country: data.Country,
          ExDate: data.ExDate,
          PostCode: data.PostCode,
          CardNumber: data.CardNumber,
        });
      });
      setUserObject(dataArray);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFirstName = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    return dbFire.child("User01/").update({
      firstName: event.target.value,
    });
  };
  const handleLastName = (event) => {
    event.preventDefault();
    dbFire.child("User01/").update({
      lastName: event.target.value,
    });
  };

  const handleEmail = (event) => {
    event.preventDefault();
    dbFire.child("User01/").update({
      Email: event.target.value,
    });
  };

  const handlePassword = (event) => {
    event.preventDefault();
    dbFire.child("User01/").update({
      Password: event.target.value,
    });
  };

  const handleCity = (event) => {
    event.preventDefault();
    dbFire.child("User01/").update({
      City: event.target.value,
    });
  };

  const handleCountry = (event) => {
    event.preventDefault();
    dbFire.child("User01/").update({
      Country: event.target.value,
    });
  };

  const handlePostCode = (event) => {
    e.preventDefault();
    dbFire.child("User01/").update({
      PostCode: event.target.value,
    });
  };

  const showUpdateInfo = () => {
    setShowUpdate(!showUpdate);
    setUpdatetxt(!changeUpdatetxt);
  };

  return (
    <div>
      <Navbar />
      <MDBBtn
        color={"blue"}
        className={styles.updateBtn}
        onClick={() => showUpdateInfo()}
      >
        {changeUpdatetxt ? "DONE" : "UPDATE INFO"}
      </MDBBtn>

      <div className={styles.BankCardComponent}>
        <BankCard
          number={userObject.cardNumber}
          holderName={userObject.firstName + " " + userObject.lastName}
          expiration={userObject.ExDate}
          cvv={userObject.CVV}
        />
      </div>

      <div className={styles.noteBottom}>
        <h3>
          Every change you make in your{" "}
          <span style={{ color: "aqua" }}>Account Infromation</span>,
        </h3>
        <h3>
          will be sent to you for confirmation via{" "}
          <span style={{ color: "aqua" }}>Email</span>.
        </h3>
      </div>
      {showUpdate ? (
        //update component
        <div className={styles.UpdateUserComponent}>
          <form className="form-inline">
            <input
              onChange={(event) => handleFirstName(event)}
              placeholder="First name..."
              type="text"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handleLastName}
              placeholder="Last name..."
              type="text"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handleEmail}
              placeholder="Email..."
              type="text"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handlePassword}
              placeholder="Password..."
              type="number"
              min="0"
              maxLength="8"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handleCity}
              placeholder="City..."
              type="text"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handlePostCode}
              placeholder="Post Code..."
              type="text"
              className={styles.inputData}
            />
          </form>
          <form className="form-inline">
            <input
              onChange={handleCountry}
              placeholder="Country..."
              type="text"
              className={styles.inputData}
            />
          </form>
        </div>
      ) : null}
      {userObject
        ? userObject.map((user) => {
            return (
              <User
                firstName={user.firstName}
                lastName={user.lastName}
                Email={user.Email}
                Password={user.Password}
                City={user.City}
                PostCode={user.PostCode}
                Country={user.Country}
                BankName={user.BankName}
                cardNumber={user.CardNumber}
                ExDate={user.ExDate}
                CVC={user.CVV}
              />
            );
          })
        : ""}

      <div>
        <FooterPage />
      </div>
    </div>
  );
}
