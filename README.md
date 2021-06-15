# simple-login-form

> Simple yet stunning React login form component with basic configurgable styling.

[![NPM](https://img.shields.io/npm/v/simple-login-form.svg)](https://www.npmjs.com/package/simple-login-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-login-form
```

![simple-login-form](/src/assets/demonstration.png)

## Usage

First you need to import the component and the stylesheet.

```jsx
import React, { Component } from 'react'

import SimpleLoginForm from 'simple-login-form'
import 'simple-login-form/dist/index.css'
```

Then declare the `<SimpleLoginForm />` tag where you see fit.

```jsx
export default class App extends Component {
  // Copy and paste this into your project. Height is advised to be left as is. everything else can be manipulated to your likings.
  formStyle = {
    maxWidth: '350px',
    maxHeight: '525px',
    background: 'linear-gradient(#e66465, #9198e5)',
    borderRadius: '2%'
  }

  // function used to control submit event on form.
  sendUserInfoToDatabase = (userInfo, event) => {}

  render() {
    // The prop names must be identical to whats shown below or the component would not render.
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
```

The forget password anchor links endpoint is 'forgot-password'. Use that endpoint to load whatever component or page you need to control what happens when a user clicks 'forgot password?'

## License

MIT © [kgeorge24](https://github.com/kgeorge24)
