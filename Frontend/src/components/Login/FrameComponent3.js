import styles from "./FrameComponent3.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.welcomeBackParent}>
        <h1 className={styles.welcomeBack}>Welcome back!</h1>
        <img
          className={styles.headerRectIcon}
          loading="lazy"
          alt=""
          src="/rectangle-29@2x.png"
        />
      </div>
      <form className={styles.loginForm}>
        <div className={styles.loginFields}>
          <div className={styles.frameGroup}>
            <div className={styles.nameWrapper}>
              <h3 className={styles.name}>Email address</h3>
            </div>
            <div className={styles.passwordField}>
              <input
                className={styles.passwordFieldChild}
                placeholder="Enter your email"
                type="text"
              />
            </div>
          </div>
          <div className={styles.loginOptions}>
            <div className={styles.frameContainer}>
              <div className={styles.nameContainer}>
                <h3 className={styles.name1}>Password</h3>
              </div>
              <div className={styles.forgotPassword}>
                <input
                  className={styles.forgotPasswordChild}
                  placeholder="Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.forgotPasswordOption}>
              <div className={styles.forgotPassword1}>forgot password</div>
            </div>
          </div>
          <div className={styles.rememberMeSettings}>
            <div className={styles.checkboxWrapper}>
              <div className={styles.checkbox} />
            </div>
            <div className={styles.rememberFor30}>Remember for 30 days</div>
          </div>
        </div>
        <div className={styles.loginFormInner}>
          <button className={styles.instanceParent}>
            <div className={styles.frameDiv}>
              <div className={styles.nameFrame}>
                <div className={styles.name2}>Name</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.nameWrapper1}>
                  <div className={styles.name3}>Name</div>
                </div>
              </div>
            </div>
            <div className={styles.loginWrapper}>
              <b className={styles.login}>Login</b>
            </div>
          </button>
        </div>
        <div className={styles.loginFormChild}>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.orWrapper}>
              <div className={styles.or}>Or</div>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.socialLogins}>
        <div className={styles.socialLoginOptions}>
          <button className={styles.socialLoginButtons}>
            <div className={styles.socialLoginIcons}>
              <img
                className={styles.icons8Google1}
                alt=""
                src="/icons8google-1.svg"
              />
              <div className={styles.signInWith}>Sign in with Google</div>
            </div>
          </button>
          <button className={styles.socialLoginButtons1}>
            <div className={styles.icons8AppleLogo1Parent}>
              <img
                className={styles.icons8AppleLogo1}
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className={styles.signInWith1}>Sign in with Apple</div>
            </div>
          </button>
        </div>
        <div className={styles.dontHaveAnAccountSignUpWrapper}>
          <h3 className={styles.dontHaveAnContainer}>
            <span
              className={styles.dontHaveAn}
            >{`Don’t have an account?  `}</span>
            <span className={styles.signUp}>Sign Up</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
