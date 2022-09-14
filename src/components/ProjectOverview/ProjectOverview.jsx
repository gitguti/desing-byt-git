import styles from './ProjectOverview.module.scss'

export default function ProjectOverview(props) {
    const {overview} = props;
    const {title, longDescription,rolDescription, problem, goal, toolsDescription, owner, timeframe,description} = overview;
    console.log(overview, title);
    console.log(longDescription, "longDescription");
    return (
        <>
        <div className={styles.container__overview}>
            <div className={styles.container__overview__description}>
            <h3 className={styles.container__overview__subtext}>OVERVIEW</h3>
            <h2 className={styles.container__overview__title}>Project Brief</h2>
            <p className={styles.container__overview__detailsgrid__details__text}>{description}</p>    
            <h2 className={styles.container__overview__title}>The problem</h2>
            <p className={styles.container__overview__detailsgrid__details__text}>{problem}</p> 
            <h2 className={styles.container__overview__title}>The Goal</h2>
            <p className={styles.container__overview__detailsgrid__details__text}>{goal}</p>   
            </div>
            <div className={styles.container__overview__detailsgrid}>
            <div className={styles.container__overview__detailsgrid__details}>
            <h3 className={styles.container__overview__detailsgrid__details__title}>Role</h3>
            <p className={styles.container__overview__detailsgrid__details__text}>{rolDescription}</p>
            </div>
            <div className={styles.container__overview__detailsgrid__details}>
            <h3 className={styles.container__overview__detailsgrid__details__title}>Tools</h3>
            <p className={styles.container__overview__detailsgrid__details__text}>{toolsDescription}</p>
            </div>
            <div className={styles.container__overview__detailsgrid__details}>
            <h3 className={styles.container__overview__detailsgrid__details__title}>Company</h3>
            <p className={styles.container__overview__detailsgrid__details__text}>{owner}</p>
            </div>
            <div className={styles.container__overview__detailsgrid__details}>
            <h3 className={styles.container__overview__detailsgrid__details__title}>Timeframe</h3>
            <p className={styles.container__overview__detailsgrid__details__text}>{timeframe}</p>
            </div>
           </div> 
        </div>    
        </>
    )
}