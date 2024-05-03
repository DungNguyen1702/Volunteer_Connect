import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.introduceInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.bePartOfTheVolunteerComunWrapper}>
          <h2 className={styles.bePartOfContainer}>
            <p className={styles.bePartOf}>{`Be part of `}</p>
            <p className={styles.theVolunteer}>the VOLUNTEER</p>
            <p className={styles.comunity}>Comunity</p>
          </h2>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.beAVolunteerWrapper}>
              <h2 className={styles.beAVolunteer}>Be a Volunteer</h2>
            </div>
            <div className={styles.informationAboutRule}>
              information about rule member in comunity, as “how to become
              volunteer”, “when be volunteer, do something...”
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <h2 className={styles.beAHost}>Be a Host</h2>
            <div className={styles.informationAboutRuleHostInWrapper}>
              <div className={styles.informationAboutRule1}>
                information about rule host in comunity, as “post status”, “when
                be host, do something...”
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-67@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
