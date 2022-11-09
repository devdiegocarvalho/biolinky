import { useState } from 'react'
import './login.css'
import { Logo } from '../../Components/Logo'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  function handleLogin(e){
    e.preventDefault();

    if(email === '' || password === '') {
      toast.warning('Prencha todos os campos!')
      return
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success('Seja bem-vindo!')
      navigate('/admin', { replace: true })
    })
    .catch(() => {
      toast.error('Erro ao tentar fazer o login!')
    })
  } 

  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Digite seu email...'
          value={email}
          onChange={ (e) => setEmail(e.target.value) }        
        />

        <input
          type='password'
          placeholder='********'
          autoComplete='on' 
          value={password}
          onChange={ (e) => setPassword(e.target.value) }       
        /> 

        <button type='submit'>Acessar</button>                
      </form>    
    </div>
  )
}