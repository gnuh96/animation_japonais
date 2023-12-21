import React, {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import Icon from '../../components/icon/Icon'
import Input from '../../components/inputInApp/InputInApp'
import ButtonConfirmation from '../../components/buttonConfirmation'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.error('Error logging in:', error.message)
    }
  }

  return (
    <div className='loginContainer'>
      <Icon type='logoApp' size='100%' />
      <h1 className='--titleAuthText'>Bienvenue</h1>
      <form onSubmit={handleSubmit} className='LoginForm'>
        <Input
          type='text'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonConfirmation text='Connexion' />
        <div className='NavLink'>
          <Link to='/auth/register'>Pas encore de compte ?</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
