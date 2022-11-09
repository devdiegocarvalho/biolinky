import './home.css'
import { Social } from '../../Components/Social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home() {
  return(
    <div className='home-container'>
      <h1>Diego Carvalho</h1>
      <span>Meus Links 👇</span>

      <main className='links'>
      <section className='link-area'>
        <a href='#'>
          <p className='link-text'>Canal no Youtube</p>
        </a>
      </section>

      <section className='link-area'>
        <a href='#'>
          <p className='link-text'>Grupo no Telegram</p>
        </a>
      </section>

      <section className='link-area'>
        <a href='#'>
          <p className='link-text'>Facebook</p>
        </a>
      </section>

      <footer>
        <Social url='https://www.facebook.com/diego.carvalho.73594/'>
          <FaFacebook size={35} color="#fff"/>
        </Social>

        <Social url='https://www.instagram.com/diegocarvalhoros/'>
          <FaInstagram size={35} color="#fff"/>
        </Social>

        <Social url='https://www.youtube.com/channel/UC3W_VJrxWFcT64ou8OzjGOg'>
          <FaYoutube size={35} color="#fff"/>
        </Social>
      </footer>
      </main>
     
    </div>
  )
}