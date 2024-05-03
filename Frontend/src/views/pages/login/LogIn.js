import FrameComponent3 from "../../../components/Login/FrameComponent3";
import styles from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.frameParent}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.logInInner}>
        <FrameComponent3 />
      </div>
      <img
        className={styles.backgroundRectIcon}
        loading="lazy"
        alt=""
        src="/rectangle-701@2x.png"
      />
    </div>
  );
};

export default LogIn;
