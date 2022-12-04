import React from "react";

// Styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div><span>1</span>item left</div>
      <div>

      </div>
      <button className={styles.clearCompleted}>clear completed</button>
    </div>
  );
};

export default Footer;
