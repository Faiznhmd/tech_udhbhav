import React, { useState, useEffect } from 'react';
import classes from './Popup.module.css';
// import whatsapp from "../../../assets/whatsapp.svg";
// import cross from "../../../assets/cross.svg";
// import GrabBitBtn from "../GrabBitBtn/GrabBitBtn";
// import grabbits from "../../../assets/grabbits.png";
// import { NavLink } from "react-router-dom";
import Button from '../Button/Button';
import logos from '../../../assets/Logo.png';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('eventPopup');
    if (!popupShown) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('eventPopup', true);
      }, 8000);
    }
  }, []);

  function handleClose() {
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <>
          <div className={classes.blur}>
            <div className={classes.card}>
              <img className={classes.grabbit_image} src={logos} alt="logo" />
              <h2 className={classes.text}>Exploring Tech Udbhav is Free!</h2>
              <h1 className={classes.subtext}>Our Events are free.</h1>
              <div className={classes.btn_container}>
                <Button
                  onClick={handleClose}
                  link="/events"
                  label="Explore our Events"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
