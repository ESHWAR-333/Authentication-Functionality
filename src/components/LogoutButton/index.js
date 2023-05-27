import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
