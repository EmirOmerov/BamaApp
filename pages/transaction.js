import React, { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Trans.module.css";
import RecentReceived from "../components/recentReceived";
import RecentSent from "../components/recentSent";
import { MDBBtn } from "mdbreact";
import SendTransactions from "../components/sendTransactions";
import RecieveTransactions from "../components/recieveTransactions";
import FooterPage from "../components/footer";

export default function transaction() {
  const [currentAmount, setCurrentAmount] = useState(100);
  const [showST, setST] = useState(false);
  const [showRT, setRT] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [sentData, setSentData] = useState([
    {
      sendName: "Emir Omerovic",
      sAmount: 100,
    },
    {
      sendName: "Elvira Omerovic",
      sAmount: 234.5,
    },
    {
      sendName: "Adnan Terzic",
      sAmount: 53,
    },
  ]);

  const [recieveData, setRecieveData] = useState([
    {
      recieveName: "Sekib Mehic",
      rAmount: 256,
    },
    {
      recieveName: "Aleksandar Pantic",
      rAmount: 526,
    },
    {
      recieveName: "John Doe",
      rAmount: 194,
    },
  ]);

  const handleST = () => {
    setST(!showST);
    setRT(false);
  };
  const handleRT = () => {
    setRT(!showRT);
    setST(false);
  };
  //update the RSTn component
  const updateST = (param, paramAmount) => {
    setSentData((sentData) => [
      {
        sendName: param,
        sAmount: paramAmount,
      },
      ...sentData,
    ]);
    setCurrentAmount(parseInt(currentAmount) - parseInt(paramAmount));
    console.log(param);
    console.log(paramAmount);
  };
  //update the RRT component
  const updateRT = (param2, paramAmount2) => {
    setRecieveData((recieveData) => [
      {
        recieveName: param2,
        rAmount: paramAmount2,
      },
      ...recieveData,
    ]);
    setCurrentAmount(parseInt(currentAmount) + parseInt(paramAmount2));
  };
  return (
    <div>
      <Navbar />
      <div className={styles.currentAmount}>
        <h2>
          Current Amount:{" "}
          <span style={{ color: "white" }}>{currentAmount}KM</span>
        </h2>
      </div>
      <div className={styles.RecentReceived}>
        <RecentReceived recieveData={recieveData} />
      </div>
      <div className={styles.RecentSent}>
        <RecentSent sentData={sentData} updateST={updateST} />
      </div>
      <div className={styles.TransBtns}>
        <MDBBtn className={styles.btnTrans} onClick={() => handleST()}>
          Send Transactions
        </MDBBtn>
        <MDBBtn className={styles.btnTrans} onClick={() => handleRT()}>
          Receive Transactions
        </MDBBtn>
      </div>
      {showST ? (
        <SendTransactions updateST={updateST} />
      ) : (
        <img src={"/novilogo.png"} className={styles.logoTran} />
      )}
      {showRT ? <RecieveTransactions updateRT={updateRT} /> : null}
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
