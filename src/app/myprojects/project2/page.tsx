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
                    src="/static/hero2.png"
                    alt="belco-hero"
                    fill
                    className={styles.heroimg}
                    priority
                />


                <div className={styles.headercontainer}>
                    <h1  className={styles.projectheader}>Belco Alliance website</h1>
                    <h2 className={styles.belcosub}>
                        A corporate website for Belco Alliance, showcasing their services and expertise.
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
                        <source src="/static/belcovideo.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <a
                        href="https://belco-alliance-ashy.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.prbtn}
                    >
                        EXPLORE THE WEBSITE LIVE
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
                            May 2025
                        </div>
                    </div>

                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Technology used:</h3>
                        <div className={styles.tehntxt}>
                            <Image className={styles.tehnicon} src="/static/html.png" alt="html" width={50} height={50} />
                            <Image className={styles.tehnicon} src="/static/css.png" alt="css" width={50} height={50} />
                            <Image className={styles.tehnicon} src="/static/js.png" alt="js" width={50} height={50} />
                        </div>
                    </div>

                    <div className={styles.infocontainer}>
                        <h3 className={styles.txtheader}>Project Overview:</h3>
                        <div className={styles.infotxt}> Under development

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