import React from 'react';
import styles from './ProjectSection.module.scss'

export default function ProjectSection(props) {
    const {projectDetails} = props;
    const {description, nombreDelPaso, descriptionTwo, ul, descriptionThree, photoV,photoH, stage} = projectDetails;
    console.log('stages' ,projectDetails);
    console.log(description);
    // console.log(Object.keys(ul));
    console.log('ul es ',ul);
    let ulKey
    if(ul!==undefined) {
        ulKey = Object.keys(ul);
        // console.log('Object key ul',Object.keys())};

    return (
        <>
        <div className={styles.projectSection__container}>
        <span className={styles.projectSection__container__badge}>{stage}</span>
        <h3 className={styles.projectSection__container__title}>{nombreDelPaso}</h3>
        <p className={styles.projectSection__container__text}>{description}</p> 
        { descriptionTwo !== undefined && 
            <p className={styles.projectSection__container__text}>{descriptionTwo}</p>   
        } 
        {
           ul !== undefined && <ul className={styles.projectSection__container__ul}>{ulKey.map(key=> <li className={styles.projectSection__container__li} key={[key]}>{ul[key]}</li>)}</ul>
        } 
        <p className={styles.projectSection__container__text}>{descriptionThree}</p>   
        </div>
        {
            photoV && photoH !== undefined &&         
            <div className={styles.image}>
                <img className={styles.image__phone} src={photoV}/>
                <img className={styles.image__desktop} src={photoH}/>
            </div>
        }
        </>
    )
}
}