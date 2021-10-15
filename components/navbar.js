import React, { useState } from "react";
import fire from "../components/firebase/fire";
import { MDBBtn } from "mdbreact";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
require("firebase/auth");
import ActiveLink from "../components/activeLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navBarCom}>
      <nav>
        <style jsx>{`
          .active {
            color: aqua;
          }
        `}</style>
        <ul className={styles.navbarUL}>
          <img src={"/novilogo.png"} className={styles.logoNav} />
          <li key="{Home}" className={styles.home}>
            <ActiveLink activeClassName="active" href="/home">
              <a>Home</a>
            </ActiveLink>
          </li>
          <li key="{Account}" className={styles.account}>
            <ActiveLink activeClassName="active" href="/account">
              <a>Account</a>
            </ActiveLink>
          </li>

          <li key="{Transaction}" className={styles.trans}>
            <ActiveLink activeClassName="active" href="/transaction">
              <a>Transactions</a>
            </ActiveLink>
          </li>

          <li key="{Converter}" className={styles.converter}>
            <ActiveLink activeClassName="active" href="/converter">
              <a>Converter</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <MDBBtn
        type="submit"
        gradient="blue"
        rounded
        onClick={async () => {
          await fire.auth().signOut();
          window.location.href = "/";
        }}
        className={styles.SignOutBtn}
      >
        Sign Out
      </MDBBtn>
    </div>
  );
};
export default Navbar;
