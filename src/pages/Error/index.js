import './erro.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../Components/Logo'


export default function Error() {
  return(
    <div className='error'>
      <Logo/>
      <h1>Página não encontrada!</h1>
      <p>Esta página procurada não existe ou ainda está em construção.</p>

      <Link className='link' to={'/'}>
      ← Voltar para a Home
    </Link>
    </div>
  )
}