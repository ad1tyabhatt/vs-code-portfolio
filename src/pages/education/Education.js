import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "Government Engineering College, Raipur, C.G.",
  degree: "Bachelor of Technology",
  major: "Mechanical",
  gpa: "7.52/10",
  start: "Aug 2017",
  end: "May 2021",
};

const highSchoolData = {
  school: "Maharishi Vidya Mandir, Bilaspur, C.G.",
  degree: "XII",
  major: "Science",
  percentage: "81",
  start: "Apr 2015",
  end: "Mar 2016",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>Senior Secondary</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;
