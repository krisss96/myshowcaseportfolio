import styles from  '../myprojects.module.css';

export default function Page1() {
    return (
        <div className="flex items-center justify-center">
            <h1 className={styles.projectTitle}>Virtual gallery</h1>
            <div className={styles.infobox}>
                <div className={styles.overvbox}>
                    <h2 className={styles.overv}> Project Overview</h2>
                     <div className={styles.infotxt}>The Virtual Renaissance Gallery is an immersive 3D experience built with Three.js.  The goal of this project was to recreate the elegant and timeless atmosphere of the Renaissance era, transforming classical paintings into an interactive digital exhibition.
                    The gallery allows users to explore a curated collection of Renaissance artworks, presented to scale and illuminated in a way that reflects the aesthetics of real museum spaces.  Each painting includes descriptive details, offering both a visual and educational journey through art history.
                    </div>
                </div>
                <div className={styles['tehn-infobox']}>
                <h3 className={styles['tehn-title']}>Technology used</h3>
                <div className={styles['tehn-txt']}> Three.js, Blender, Adobe Photoshop, Adobe Illustrator, Figma</div>
                </div>
            </div>
        </div>
    );}
