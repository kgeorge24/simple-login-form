import React, { useState } from 'react'
import styles from './SimpleLoginForm.css'
import lock from './assets/lock.png'
import user from './assets/user.png'
import profilePhoto from './assets/seals.jpg'

const PAGE_STATE = {login: 1, signup: 2, forgotPassword: 3}

export default ({photoIcon, style, loginHandler, signupHandler, forgetPasswordHandler, passwordRegex = /.*/, pageType}) => {
 const [email, setEmail] = useState('');
 const [invalidEmail, setInvalidEmail] = useState(false);
 const [password, setPassowrd] = useState('');
 const [invalidPassword, setInvalidPassword] = useState(false);
 const [password1, setPassword1] = useState('');
 const [invalidPassword1, setInvalidPassword1] = useState(false);
 const [pageState, setPageState] = useState(PAGE_STATE[pageType] || PAGE_STATE.login);

  const isLogin = pageState === PAGE_STATE.login;
  const isSignup = pageState === PAGE_STATE.signup;
  const isForgotPassword = pageState === PAGE_STATE.forgotPassword;

  const disablePassword = !(email && !invalidEmail);
  const disableConfirmPassword = !(password && !invalidPassword)
  const disableConfirmButton = invalidEmail || invalidPassword || invalidPassword1 || ((isLogin && !(email && password)) || (isSignup && !(email && password1 && password)))

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setInvalidEmail(email && !re.test(email.toLowerCase()));
  }

  const validatePassword = () => {
      if(password && (password.length < 5 || !passwordRegex.test(password))){
        setInvalidPassword(true)
      }
  }

  const validateConfirmPassword = () => {
    if(password1 && password !== password1){
      setInvalidPassword1(true)
    }
  }

  const changePageState = (page) => {
    setPageState(page);
    resetForm();
  }

  const resetForm = () => {
    setEmail('');
    setInvalidEmail(false);
    setPassowrd('');
    setInvalidPassword1(false);
    setPassword1('');
    setInvalidPassword1(false);
  }

  const submitForm = () => {
    if(isLogin){
      loginHandler({email, password})
    }else if(isSignup){
      signupHandler({email, password})
    }else if(isForgotPassword){
      forgetPasswordHandler({email});
    }
  }

  return (
    <div style={style} className={styles.loginform}>
      <div className={styles.profilephoto}>
        <img src={photoIcon || profilePhoto} alt='' />
      </div>
      <div className={styles.formheading}>
      <div className="formheading">
          <h1>{isSignup ? 'SIGN UP' : isForgotPassword ? 'Enter registered email' : 'LOG IN' }</h1>
        </div>
      </div>
      <div className={styles.formcontainer}>
        <form onSubmit={submitForm}>
          <div className={styles.inputsection} style={{borderBottom: invalidEmail ? "2px solid rgb(255,105,97)" : "2px solid rgb(243, 242, 242)"}}>
            <img src={user} alt='' />
            <input
              type='text'
              placeholder='Email'
              value={email}
              onBlur={validateEmail}
              onMouseOut={validateEmail}
              style={{color: invalidEmail &&  "rgb(255,105,97)"}}
              onChange={(e) => {setInvalidEmail(false); setEmail(e.currentTarget.value)}}
            />
          </div>
          {!isForgotPassword && (
            <div>
              <div className={styles.inputsection} style={{borderBottom: invalidPassword ? "2px solid rgb(255,105,97)" : "2px solid rgb(243, 242, 242)"}}>
                <img src={lock} alt='' />
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onBlur={validatePassword}
                  onMouseOut={validatePassword}
                  disabled={disablePassword}
                  style={{cursor: disablePassword && 'not-allowed', color: invalidPassword &&  "rgb(255,105,97)"}}
                  onChange={(e) => {setInvalidPassword(false); setPassowrd(e.currentTarget.value)}}
                />
              </div>
            </div>
          )}{
            isSignup && (
              <div className={styles.inputsection} style={{borderBottom: invalidPassword1 ? "2px solid rgb(255,105,97)" : "2px solid rgb(243, 242, 242)"}}>
              <img src={lock} alt='' />
              <input
                type='password'
                placeholder='Confirm Password'
                value={password1}
                onBlur={validateConfirmPassword}
                onMouseOut={validateConfirmPassword}
                disabled={disableConfirmPassword}
                style={{cursor: disableConfirmPassword && 'not-allowed', color: invalidPassword1 &&  "rgb(255,105,97)"}}
                onChange={(e) => {setInvalidPassword1(false); setPassword1(e.currentTarget.value)}}
              />
            </div>
            )
          }
          <div className={styles.loginbutton}>
              <button disabled={true} style={{cursor: disableConfirmButton ? 'not-allowed' : 'pointer'}}>CONTINUE</button>
          </div>
        </form>
      </div>
      {/* {
        isLogin && (
          <>
              <div className="divider">OR</div>
              <SignInScreen />
          </>
        )

      } */}
      <div className={styles.loginformfooter}>
        { (isLogin || isForgotPassword) &&
            <p>
                <a href='javascript:' onClick={() => {changePageState(PAGE_STATE.signup)}}>SIGN UP</a>
            </p>

        }
        { isSignup &&
            <p>
                <a href='javascript:' onClick={() => {changePageState(PAGE_STATE.login)}}>OR LOG IN</a>
            </p>

        }
        {
            isLogin &&
            <p>
              <a href='javascript:' onClick={() => {changePageState(PAGE_STATE.forgotPassword)}}>Forgot Password?</a>
            </p>

        }
      </div>
    </div>
  )
}