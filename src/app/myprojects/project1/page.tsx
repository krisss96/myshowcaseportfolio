import styles from  '../myprojects.module.css';
import Navbar from '../../components/navbar';
import Image from 'next/image';

export default function Page1() {
    return (
        <>
            <Navbar />
        <div className="flex flex-col items-center justify-center w-full">

            <div className={styles.herocontainer}>
                <Image
                    src="/static/hero1.png"
                    alt="gallery-hero"
                    fill
                    className={styles.heroimg}
                    priority
                />


                <div className={styles.headercontainer}>
                    <h1 className={styles.projectheader}>Virtual Gallery</h1>
                    <h2 className={styles.projectsub}>
                        "An immersive virtual gallery with a curated collection of Renaissance paintings"
                    </h2>
                </div>
            </div>

            <div className={styles.layoutcontainer}>
                <div className={styles.stickyinfo}>
                    <video className={styles.videopr}
                           loop
                           autoPlay
                           playsInline
                           muted
                           preload="auto"
                    >
                        <source src="/static/galvideo.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <a
                        href="https://project-x-phi-five.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.prbtn}
                    >
                        EXPLORE THE GALLERY LIVE
                    </a>
                </div>

                <div className={styles.scrollinginfo}>

                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Role:</h3>
                        <div className={styles.infotxt}>
                            Creative Developer & UI Designer
                        </div>
                    </div>
                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Development period:</h3>
                        <div className={styles.infotxt}>
                            June 2025
                        </div>
                    </div>

                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Technology used:</h3>
                        <div className={styles.tehntxt}>
                            <Image className={styles.tehnicon} src="/static/three-js.png" alt="Threejs" width={50} height={50} />
                            <Image className={styles.tehnicon} src="/static/js.png" alt="js" width={50} height={50} />
                            <Image className={styles.tehnicon} src="/static/html.png" alt="html" width={50} height={50} />
                            <Image className={styles.tehnicon} src="/static/css.png" alt="css" width={50} height={50} />
                        </div>
                    </div>

                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Project Overview:</h3>
                        <div className={styles.infotxt}>
                           The Virtual Gallery is a web-based 3D environment that allows users to explore a curated collection of Renaissance paintings in an immersive setting. Built using Three.js, the gallery features realistic lighting and textures to enhance the viewing experience.

                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.detailinfo}>
                <h3 className={styles.txtheader}>Concept & Development</h3>
                <div className={styles.infotxt}>
                 detailed info detailed info detailed info detailed infodetailed infodetailed infodetailed info detailed info detailed info detailed infodetailed infodetailed infodetailed info
                </div>
            </div>
        </div>
            </>
    );
}