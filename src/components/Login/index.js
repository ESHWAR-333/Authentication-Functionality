import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onClickLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const inputFields = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(inputFields),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
