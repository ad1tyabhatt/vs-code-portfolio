import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "website",
    link: "Aditya Bhatt",
    href: "#",
  },
  {
    social: "email",
    link: "adityabhatt789@gmail.com",
    href: "mailto:adityabhatt789@gmail.com",
  },
  {
    social: "github",
    link: "adityabhatt",
    href: "https://github.com/ad1tyabhatt",
  },
  {
    social: "linkedin",
    link: "adityabhatt",
    href: "hhttps://www.linkedin.com/in/adityabhatt07/",
  },
  {
    social: "Leetcode",
    link: "aditybhatt",
    href: "https://leetcode.com/cod3mas7er/",
  },
  {
    social: "telegram",
    link: "adityabhatt",
    href: "https://telegram.org/",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
