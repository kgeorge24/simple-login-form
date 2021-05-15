import React, { Component } from 'react'
// Example of importing an image for the photo icon.
import picture from './glass.jpg'
import SimpleLoginForm from 'simple-login-form'
import 'simple-login-form/dist/index.css'

export default class App extends Component {
  sendUserInfoToDatabase = (userInfo, event) => {
    // Write your code here...
  }

  // Default styling supplied. You can change the background color,
  // border radius and the width. Height is advised to be left as is.
  formStyle = {
    maxWidth: '350px',
    maxHeight: '525px',
    background: 'linear-gradient(#e66465, #9198e5)',
    borderRadius: '2%'
  }

  render() {
    return (
      <React.Fragment>
        <SimpleLoginForm
          getUserInfo={this.sendUserInfoToDatabase}
          style={this.formStyle}
          photoIcon={picture}
        />
      </React.Fragment>
    )
  }
}
