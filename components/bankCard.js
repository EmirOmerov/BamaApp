import React, { useState } from "react";
import PaymentCard from "react-payment-card-component";
import styles from "../styles/Account.module.css";
import { MDBBtn } from "mdbreact";

export default function BankCard({ number, holderName, expiration, cvv }) {
  const [flipped, setFlip] = useState(false);
  const FlipCard = () => {
    setFlip(!flipped);
  };
  return (
    <div>
      <div className={styles.CardBorder}>
        <PaymentCard
          bank="bradesco"
          model="prime"
          type="black"
          brand="mastercard"
          number={number}
          cvv={cvv}
          holderName={holderName}
          expiration={expiration}
          flipped={flipped}
        />
      </div>
      <MDBBtn
        color={"blue"}
        className={styles.FlipCardBtn}
        onClick={() => FlipCard()}
      >
        Flip!
      </MDBBtn>
    </div>
  );
}
