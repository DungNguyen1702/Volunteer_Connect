import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
    return (
        <section className={styles.introduceInner}>
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <h1 className={styles.welcome}>Welcome</h1>
                    </div>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <h1 className={styles.homePage}>Be together!</h1>
                    </div>
                </div>
                <div className={styles.frameContainer}>
                    <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <div className={styles.whatsVolunteerConnectParent}>
                            <h1 className={styles.whatsVolunteerConnect}>
                                What’s “Volunteer Connect”?
                            </h1>
                            <div
                                className={
                                    styles.explanationnavdkadkacdsWrapper
                                }
                            >
                                <div className={styles.explanationnavdkadkacds}>
                                    “Volunteer Connect” is a platform with
                                    various initiatives aimed at connecting
                                    volunteers with organizations or activities
                                    that need support.
                                </div>
                            </div>
                        </div>
                        <div className={styles.rectangleWrapper}>
                            <img
                                className={styles.rectangleIcon}
                                loading="lazy"
                                alt=""
                                src="/rectangle-68@2x.png"
                            />
                        </div>
                    </div>
                    <div className={styles.groupDiv}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.volunteerConnectionParent}>
                            <h1 className={styles.volunteerConnection}>
                                Volunteer Connection
                            </h1>
                            <div
                                className={
                                    styles.explanationnavdkadkacdsContainer
                                }
                            >
                                <div
                                    className={styles.explanationnavdkadkacds1}
                                >
                                    "Volunteer Connect: Bridging Passion and
                                    Purpose - Your Ultimate Platform for
                                    Discovering and Engaging in Meaningful
                                    Volunteer Opportunities"
                                </div>
                            </div>
                        </div>
                        <div className={styles.rectangleFrame}>
                            <img
                                className={styles.frameChild1}
                                loading="lazy"
                                alt=""
                                src="/rectangle-4163@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent2;
