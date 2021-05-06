import React, { useState } from "react";
import Navbar from "../components/navbar";
import PhotoGallery from "../components/photoCarousel";
import styles from "../styles/Home.module.css";
import text from "../components/text";
import { MDBBtn } from "mdbreact";
import FooterPage from "../components/footer";

function Home() {
  const [showReadMore, setShowReadMore] = useState(false);
  const [changeBtnName, setChangeBtnName] = useState(true);

  const ShowreadMoreComponent = () => {
    setShowReadMore(!showReadMore);
    setChangeBtnName(!changeBtnName);
  };

  const readMoreComponent = () => {
    return (
      <div className={styles.ReadMore}>
        <h4 className={styles.descText}>{text}</h4>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="title-main">
        <div className="white-text text-center text-md-left col-md-5 mt-xl-5 mb-9">
          <h1 className={styles.welcometxt}>Welcome to B.A.M.A. </h1>
          <h5 className={styles.undertxt}>
            Your personal and favorite Bank Assistant.
          </h5>
          <hr className={styles.underline} />
          <h6 className="mb-4"></h6>
        </div>
        <MDBBtn
          type="submit"
          gradient="blue"
          rounded
          onClick={() => ShowreadMoreComponent()}
          className={styles.ReadMoreBtn}
        >
          {changeBtnName ? "About" : "Hide"}
        </MDBBtn>
        {showReadMore && readMoreComponent()}
        <h4 className={styles.readmore}>
          Click to read More About B.a.m.a. and our service...
        </h4>
      </div>
      <h2 className={styles.underTxt}>Change the future with us!</h2>
      <h2 className={styles.underTxt02}>With your favorite ATM App.</h2>
      <div className={styles.photoGallery}>
        <PhotoGallery />
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}

export default Home;
