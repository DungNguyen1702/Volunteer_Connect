import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.introduceInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.locationDetailsParent}>
            <img
              className={styles.locationDetailsIcon}
              loading="lazy"
              alt=""
              src="/rectangle-86@2x.png"
            />
            <img
              className={styles.locationDetailsIcon1}
              loading="lazy"
              alt=""
              src="/rectangle-87@2x.png"
            />
            <img
              className={styles.locationDetailsIcon2}
              loading="lazy"
              alt=""
              src="/rectangle-88@2x.png"
            />
            <img
              className={styles.locationDetailsIcon3}
              loading="lazy"
              alt=""
              src="/rectangle-89@2x.png"
            />
          </div>
        </div>
        <footer className={styles.frameParent}>
          <div className={styles.officeInfoWrapper}>
            <div className={styles.officeInfo}>
              <div className={styles.countryRegionContainer}>
                <b>{`Country & Region : `}</b>
                <span className={styles.vietnamSigaporeIndonesia}>
                  Vietnam, Sigapore, Indonesia, Malaysia
                </span>
              </div>
              <div className={styles.headOfficeContainer}>
                <b>{`Head office : `}</b>
                <span className={styles.nguyenLuongBang}>
                  54 Nguyen Luong Bang, Hoa Khanh, Lien Chieu, Da Nang
                </span>
              </div>
            </div>
          </div>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-91@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.liveLearnAndGrowConnectParent}>
                <div
                  className={styles.liveLearnAnd}
                >{`- Live, learn and grow & connect -`}</div>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-90@2x.png"
                />
              </div>
              <div className={styles.volunteerConnectionWrapper}>
                <h3 className={styles.volunteerConnection}>
                  Volunteer connection
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FrameComponent;
