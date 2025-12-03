import styles from  '../myprojects.module.css';
import Image from "next/image";

export default function Page3() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={styles.projectTitle}>SheLab</h1>
            <div className={styles.projectinfo}>
                <div className={styles.overvbox}>
                    <h2 className={styles.overv}> Project Overview</h2>
                    <div className={styles.infotxt}>The Virtual Renaissance Gallery is an immersive 3D experience built with Three.js.  The goal of this project was to recreate the elegant and timeless atmosphere of the Renaissance era, transforming classical paintings into an interactive digital exhibition.
                        The gallery allows users to explore a curated collection of Renaissance artworks, presented to scale and illuminated in a way that reflects the aesthetics of real museum spaces.  Each painting includes descriptive details, offering both a visual and educational journey through art history.
                    </div>
                </div>
                <div className={styles.tehninfobox}>
                    <h3 className={styles.tehntitle}>Technology used:</h3>
                    <div className={styles.tehntxt}>
                        <Image className={styles.tehnIcon} src="/static/three-js.png" alt="Threejs" width={50} height={50} />
                        <Image className={styles.tehnIcon} src="/static/js.png" alt="js" width={50} height={50} />
                        <Image className={styles.tehnIcon} src="/static/html.png" alt="html" width={50} height={50} />
                        <Image className={styles.tehnIcon} src="/static/css.png" alt="css" width={50} height={50} />
                    </div>
                </div>
            </div>

            <div className={styles.liveProjectContainer}>
                <a
                    href="[Your Vercel URL Here]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveProjectButton}
                >
                    EXPLORE THE GALLERY LIVE
                </a>
            </div>

        </div>
    );}
