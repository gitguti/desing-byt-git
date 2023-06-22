import React from 'react';
import styles from "./ProjectContainer.module.scss";

export default function CaseContainer(props) {
  const { projectDetails } = props;
    return (
      <>
      <div className={styles.caseContainer}>
        <div className={styles.caseImage}>
        {/* <Image src={projectDetails.photo}  width={500} height={500} size={"100vw"}/> */}
        <img src={projectDetails.photo} alt="dev logo"/>
        </div>
        {/* <div className={styles.caseDescription}>
            <div className={styles.caseDescription__principal}>
              <h3 className={styles.caseDescription__principal__title}>{projectDetails.title}</h3>
              <p className={styles.caseDescription__principal__text}>{projectDetails.shortDescription}</p>
            </div>
            <div className={styles.caseDescription__details}>
            <h3 className={styles.caseDescription__details__title}>Role</h3>
            <p className={styles.caseDescription__details__text}>{projectDetails.rolDescription}</p>
            </div>
            <div className={styles.caseDescription__details}>
            <h3 className={styles.caseDescription__details__title}>Tools used</h3>
            <p className={styles.caseDescription__details__text}>{projectDetails.toolsDescription}</p>
            </div>
            <div className={styles.caseDescription__details}>
            <h3 className={styles.caseDescription__details__title}>Company</h3>
            <p className={styles.caseDescription__details__text}>{projectDetails.owner}</p>
            </div>
        </div> */}
      </div>
      </>
    );
  }
  