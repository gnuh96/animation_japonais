import React, {useState} from 'react'
import './Register.css'
import {Link, useNavigate} from 'react-router-dom'
import Icon from '../../components/icon/Icon'
import Input from '../../components/inputInApp/InputInApp'
import ButtonConfirmation from '../../components/buttonConfirmation'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const auth = getAuth()
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password)
      console.log('Registration successful!')
    } catch (error) {
      console.error('Error registering:', error.message)
    }
    navigate('/auth/login')
  }

  return (
    <div className='registerContainer'>
      <Icon type='logoApp' size='100%' />
      <h1 className='--titleAuthText'>Inscrivez-vous !</h1>
      <form onSubmit={handleSubmit} className='RegisterForm'>
        <Input
          color='F7F9FF'
          type='text'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          color='F7F9FF'
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonConfirmation text='Inscription' />
      </form>
      <div className='NavLink'>
        <div>Déjà un compte ?</div>
        <Link to='/auth/login'>Se connecter</Link>
      </div>
    </div>
  )
}

export default Register
