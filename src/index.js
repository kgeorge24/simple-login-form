import React, { Component } from 'react'
import styles from './SimpleLoginForm.css'
import lock from './assets/lock.png'
import user from './assets/user.png'
import profilePhoto from './assets/seals.jpg'

export class SimpleLoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  saveInfoFromInput = (e) => {
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value })
    } else if (e.target.name === 'password') {
      this.setState({ password: e.target.value })
    }
  }

  loadImage = () => {
    if (this.props.photoIcon) {
      console.log('showing custom image')
      return this.props.photoIcon
    } else {
      console.log('showing default image')
      return profilePhoto
    }
  }

  render() {
    return (
      <div style={this.props.style} className={styles.loginform}>
        <div className={styles.profilephoto}>
          <img src={this.loadImage()} alt='' />
        </div>
        <div className={styles.formheading}>
          <h1>LOG IN</h1>
        </div>
        <div className={styles.formcontainer}>
          <form onSubmit={(e) => this.props.getUserInfo(this.state, e)}>
            <div className={styles.inputsection}>
              <img src={user} alt='' />
              <input
                type='text'
                placeholder='Username'
                name='username'
                onChange={(e) => this.saveInfoFromInput(e)}
              />
            </div>
            <div className={styles.inputsection}>
              <img src={lock} alt='' />
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={(e) => this.saveInfoFromInput(e)}
              />
            </div>
            {/* <label className={styles.checkboxcontainer}>
              <input type='checkbox' />
              Remember Me
            </label> */}
            <div className={styles.loginbutton}>
              <button>LOGIN</button>
            </div>
            <div className={styles.loginformfooter}>
              <p>
                <a href='/forgot-password'>Forgot Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
