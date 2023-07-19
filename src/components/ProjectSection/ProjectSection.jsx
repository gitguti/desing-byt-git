import React from 'react';
import styles from './ProjectSection.module.scss';

export default function ProjectSection(props) {
    const {projectDetails} = props;
    const {description, nombreDelPaso, descriptionTwo, ul, descriptionThree, photoV1,photoH1, photoV2,photoH2, photoV3, photoH3, videoV, stage} = projectDetails;
    // console.log('stages' ,projectDetails);
    // console.log('video', videoV);
    // console.log(description);
    // // console.log(Object.keys(ul));
    // console.log('ul es ',ul);
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
        {
  (photoV1 && photoH1) ? (
    <div className={styles.image}>
      <img className={styles.image__phone} src={photoV1} alt=" Image" />
      <img className={styles.image__desktop} src={photoH1} alt="Desktop Image" />
    </div>
  ) : (videoV !== null) && (
    <div className={styles.container}>
      <iframe
        loading="lazy"
        className={styles.iframe}
        src="https://www.canva.com/design/DAFkjugshiU/watch?embed"
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  )
}
        { descriptionTwo !== undefined && 
            <p className={styles.projectSection__container__text}>{descriptionTwo}</p>   
        } 
        {
  (photoV2 && photoH2) ? (
    <div className={styles.image}>
      <img className={styles.image__phone} src={photoV2} alt=" Image" />
      <img className={styles.image__desktop} src={photoH2} alt="Desktop Image" />
    </div>
  ) : (videoV !== null) && (
    <div className={styles.container}>
      <iframe
        loading="lazy"
        className={styles.iframe}
        src="https://www.canva.com/design/DAFkjugshiU/watch?embed"
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  )
}
        {
           ul !== undefined && <ul className={styles.projectSection__container__ul}>{ulKey.map(key=> <li className={styles.projectSection__container__li} key={[key]}>{ul[key]}</li>)}</ul>
        } 
        <p className={styles.projectSection__container__text}>{descriptionThree}</p>   
        {
  (photoV3 && photoH3) ? (
    <div className={styles.image}>
      <img className={styles.image__phone} src={photoV3} alt=" Image" />
      <img className={styles.image__desktop} src={photoH3} alt="Desktop Image" />
    </div>
  ) : (videoV !== null) && (
    <div className={styles.container}>
      <iframe
        loading="lazy"
        className={styles.iframe}
        src="https://www.canva.com/design/DAFkjugshiU/watch?embed"
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  )
}
        </div>
        

        </>
    )
}
}