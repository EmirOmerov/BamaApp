import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import fire, { db } from "../components/firebase/fire";
import styles from "../styles/Account.module.css";
import User from "../components/user";
import { MDBBtn } from "mdbreact";
import UserUpdate from "../components/userUpdate";
import BankCard from "../components/bankCard";
import FooterPage from "../components/footer";

export default function Account() {
  const [users, setUser] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [newFirstName, setFirstName] = useState("");
  const [newLastName, setLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newPostCode, setNewPostCode] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newBank, setNewBank] = useState("");
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newExDate, setNewExDate] = useState("");
  const [newCVC, setNewCvC] = useState("");
  const [changeUpdatetxt, setUpdatetxt] = useState(false);

  const updateFirstName = (param) => {
    setFirstName(param);
  };
  const updateLastName = (param) => {
    setLastName(param);
  };
  const updateEmail = (param) => {
    setNewEmail(param);
  };
  const updatePassword = (param) => {
    setNewPassword(param);
  };
  const updateCity = (param) => {
    setNewCity(param);
  };
  const updatePostCode = (param) => {
    setNewPostCode(param);
  };
  const updateCountry = (param) => {
    setNewCountry(param);
  };

  const fetchUsers = async () => {
    const response = db.collection("Users");
    const data = await response.get();
    data.docs.forEach((item) => {
      setUser([...users, item.data()]);
      setFirstName(item.data().firstName);
      setLastName(item.data().lastName);
      setNewEmail(item.data().Email);
      setNewPassword(item.data().Password);
      setNewCity(item.data().City);
      setNewPostCode(item.data().PostCode);
      setNewCountry(item.data().Country);
      setNewBank(item.data().BankName);
      setNewCvC(item.data().CVC);
      setNewExDate(item.data().ExDate);
      setNewCardNumber(item.data().cardNumber);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

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
          number={newCardNumber}
          holderName={newFirstName + " " + newLastName}
          expiration={newExDate}
          cvv={newCVC}
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
        <UserUpdate
          updateFirstName={updateFirstName}
          updateLastName={updateLastName}
          updateEmail={updateEmail}
          updatePassword={updatePassword}
          updateCity={updateCity}
          updatePostCode={updatePostCode}
          updateCountry={updateCountry}
        />
      ) : null}
      {users.map((item) => {
        return (
          <User
            firstName={newFirstName}
            lastName={newLastName}
            Email={newEmail}
            Password={newPassword}
            City={newCity}
            PostCode={newPostCode}
            Country={newCountry}
            BankName={newBank}
            cardNumber={newCardNumber}
            ExDate={newExDate}
            CVC={newCVC}
          />
        );
      })}
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
