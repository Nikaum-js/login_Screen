import googleIcon from '../../assets/google-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import { Email, LockClosed, User } from '../../styles/icons'

import unlock from '../../assets/unlock.svg'
import './style.scss'

export function Login () {
  return (
  <header className="login">
    <main>
      <section>
        <h1>Faça Login</h1>
          <img src={googleIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={linkedinIcon} alt="" />
      </section>
      <span>Ou</span>
      <form>
        <div className="user">
        <input 
        type="text" 
        placeholder="Usuário">
        </input>
        <User id="user"/>
        </div>

        <div className="email">
        <input 
        type="email" 
        placeholder="Email"
        >
        </input>
        <Email  id="email"/>
        </div>

        <div className="password">
        <input
        type="password" 
        placeholder="Senha">
        </input>
        <LockClosed id="lockClosed"/>
        </div>

        <button type="button">
         Entrar
        </button>
      </form>
    </main>

    <div className="unlock">
     <img src={unlock} alt="" />
    </div>
  </header>
  );
}