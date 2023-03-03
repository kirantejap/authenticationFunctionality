import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const onSubmitSuccess = jwtToken => {
    const {history} = props
    console.log('triggred')
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  const onSubmitCreds = async event => {
    event.preventDefault()
    const username = 'rahul'
    const password = 'rahul@2021'

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <form className="Container" onSubmit={onSubmitCreds}>
      <h1>Please Login</h1>
      <button type="submit">Login with Sample Creds</button>
    </form>
  )
}

export default Login
