import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.mainContainerWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainerInner}>
            <div className={styles.inputAreaParent}>
              <div className={styles.inputArea}>
                <h1 className={styles.getStartedNow}>
                  Join to the Volunteer community
                </h1>
              </div>
              <div className={styles.enterYourCredentials}>
                Enter your Credentials to access your account
              </div>
              <form className={styles.loginArea}>
                <div className={styles.nameInputArea}>
                  <div className={styles.nameInputFieldParent}>
                    <div className={styles.nameInputField}>
                      <div className={styles.name}>Name</div>
                    </div>
                    <div className={styles.inputNameFieldWrapper}>
                      <input
                        className={styles.inputNameField}
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.nameWrapper}>
                      <div className={styles.name1}>Email address</div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <input
                        className={styles.frameChild}
                        placeholder="Enter your email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.nameContainer}>
                      <div className={styles.name2}>Password</div>
                    </div>
                    <div className={styles.frameContainer}>
                      <input
                        className={styles.frameItem}
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.checkboxWrapper}>
                      <div className={styles.checkbox} />
                    </div>
                    <div className={styles.iAgreeToContainer}>
                      {`I agree to the `}
                      <span
                        className={styles.termsPolicy}
                      >{`terms & policy`}</span>
                    </div>
                  </div>
                </div>
                <button className={styles.instanceParent}>
                  <div className={styles.frameDiv}>
                    <div className={styles.nameFrame}>
                      <div className={styles.name3}>Name</div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.nameWrapper1}>
                        <div className={styles.name4}>Name</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.loginButton}>
                    <b className={styles.login}>Signup</b>
                  </div>
                </button>
              </form>
              <div className={styles.dividerArea}>
                <div className={styles.dividerParent}>
                  <div className={styles.divider} />
                  <div className={styles.orWrapper}>
                    <div className={styles.or}>Or</div>
                  </div>
                </div>
              </div>
              <div className={styles.socialLoginArea}>
                <div className={styles.googleLoginArea}>
                  <div className={styles.googleButtonContentWrapper}>
                    <button className={styles.googleButtonContent}>
                      <div className={styles.icons8Google1Parent}>
                        <img
                          className={styles.icons8Google1}
                          alt=""
                          src="/icons8google-1.svg"
                        />
                        <div className={styles.signInWithGoogleWrapper}>
                          <div className={styles.signInWith}>
                            Sign in with Google
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <button className={styles.appleLoginArea}>
                    <div className={styles.icons8AppleLogo1Parent}>
                      <img
                        className={styles.icons8AppleLogo1}
                        alt=""
                        src="/icons8applelogo-1.svg"
                      />
                      <div className={styles.appleIcon}>
                        <div className={styles.signInWith1}>
                          Sign in with Apple
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles.signInPromptAreaWrapper}>
                  <div className={styles.signInPromptArea}>
                    <div className={styles.haveAnAccountSignInWrapper}>
                      <div className={styles.haveAnAccountContainer}>
                        <span
                          className={styles.haveAnAccount}
                        >{`Have an account?  `}</span>
                        <span className={styles.signIn}>Sign In</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.backgroundIcon}
            loading="lazy"
            alt=""
            src="/rectangle-29@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.foregroundIcon}
        loading="lazy"
        alt=""
        src="/rectangle-701@2x.png.png"
      />
    </div>
  );
};

export default SignUp;
