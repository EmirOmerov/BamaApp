import React, { useState } from "react";
import styles from "../styles/Account.module.css";
import { MDBBtn } from "mdbreact";
import dynamic from "next/dynamic";
const PaymentCard = dynamic(() => import("react-payment-card-component"), {
  ssr: false,
});

export default function BankCard({ number, holderName, expiration, cvv }) {
  const [flipped, setFlip] = useState(false);
  const FlipCard = () => {
    setFlip(!flipped);
  };
  return (
    <div>
      <div className={styles.CardBorder} onClick={() => FlipCard()}>
        <PaymentCard
          classNamePrefix="select"
          bank="bradesco"
          model="prime"
          type="black"
          brand="mastercard"
          number={number}
          cvv={cvv}
          holderName={holderName}
          expiration={expiration}
          flipped={flipped}
          class
        />
      </div>
    </div>
  );
}
