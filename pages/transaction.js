import React, { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Trans.module.css";
import RecentReceived from "../components/recentReceived";
import RecentSent from "../components/recentSent";
import { MDBBtn } from "mdbreact";
import SendTransactions from "../components/sendTransactions";
import RecieveTransactions from "../components/recieveTransactions";
import FooterPage from "../components/footer";

const DepozitComponent = ({ updateDP }) => {
  const [newAmount, setNewAmount] = useState();
  return (
    <div className={styles.WithdrawComponent}>
      <h3 className={styles.withdrawtxt}>Depozit:</h3>
      <form className="form-inline">
        <input
          onInput={(e) => {
            e.preventDefault();
            setNewAmount(e.target.value);
          }}
          placeholder="Amount:"
          type="number"
          className={styles.inputWithdraw}
        />
      </form>
      <MDBBtn
        onClick={() => updateDP(newAmount)}
        color={"blue"}
        className={styles.withdrawBtn}
      >
        Depozit
      </MDBBtn>
    </div>
  );
};

const WithdrawComponent = ({ updateWD }) => {
  const [newAmount, setNewAmount] = useState();
  return (
    <div className={styles.WithdrawComponent}>
      <h3 className={styles.withdrawtxt}>Withdraw:</h3>
      <form className="form-inline">
        <input
          onInput={(e) => {
            e.preventDefault();
            setNewAmount(e.target.value);
          }}
          placeholder="Amount:"
          type="number"
          className={styles.inputWithdraw}
        />
      </form>
      <MDBBtn
        onClick={() => updateWD(newAmount)}
        color={"blue"}
        className={styles.withdrawBtn}
      >
        Withdraw
      </MDBBtn>
    </div>
  );
};

export default function transaction() {
  const [currentAmount, setCurrentAmount] = useState(100);
  const [showST, setST] = useState(false);
  const [showRT, setRT] = useState(false);
  const [showWD, setWD] = useState(false);
  const [showDP, setDP] = useState(false);

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
    setWD(false);
    setDP(false);
  };
  const handleRT = () => {
    setRT(!showRT);
    setST(false);
    setWD(false);
    setDP(false);
  };
  const handleWD = () => {
    setWD(!showWD);
    setRT(false);
    setST(false);
    setDP(false);
  };
  const handleDP = () => {
    setDP(!showDP);
    setRT(false);
    setST(false);
    setWD(false);
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
    setCurrentAmount(parseFloat(currentAmount) - parseFloat(paramAmount));
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
    setCurrentAmount(parseFloat(currentAmount) + parseFloat(paramAmount2));
  };

  const updateWD = (updateAmount) => {
    setCurrentAmount(parseFloat(currentAmount) - parseFloat(updateAmount));
  };
  const updateDP = (updateAmount02) => {
    setCurrentAmount(parseFloat(currentAmount) + parseFloat(updateAmount02));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.currentAmount}>
        <h2>Current Amount</h2>
        <h2>
          <span
            style={{
              color: "white",
            }}
          >
            {currentAmount}KM
          </span>
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
          {showST ? "Done" : "Send Transactions"}
        </MDBBtn>
        <MDBBtn className={styles.btnTrans} onClick={() => handleWD()}>
          {showWD ? "Done" : "Withdraw"}
        </MDBBtn>
        <MDBBtn className={styles.btnTrans} onClick={() => handleRT()}>
          {showRT ? "Done" : "Receive Transactions"}
        </MDBBtn>
        <MDBBtn className={styles.btnTrans} onClick={() => handleDP()}>
          {showDP ? "Done" : "Depozit"}
        </MDBBtn>
      </div>
      {showST ? (
        <SendTransactions updateST={updateST} />
      ) : (
        <img src={"/novilogo.png"} className={styles.logoTran} />
      )}
      {showRT ? <RecieveTransactions updateRT={updateRT} /> : null}
      {showWD ? <WithdrawComponent updateWD={updateWD} /> : null}
      {showDP ? <DepozitComponent updateDP={updateDP} /> : null}
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
