import './home.css'

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
      </main>
     
    </div>
  )
}