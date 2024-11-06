import Logo from './assets/Logo (1).svg';
import Feed from './assets/feed (1).svg';
import Account from './assets/account_circle (1).svg';
import Info from './assets/info (1).svg';
import Logout from './assets/logout (1).svg';
import './styles.css';

export default function Sidebar(){
    return(
        <aside>
        <img src={Logo} alt='Logo do CodeConnect' />
        <nav>
            <ul className='lista-sidebar'>
                <li>
                    <a href='#' className='item__link-publicacao'>Publicar</a>
                </li>
                <li>
                <a href='#' className='item__link item__link--ativo'>
                    <img src={Feed} alt=''/>
                    <span>Feed</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='item__link'>
                        <img src={Account} alt=''/>
                        <span>Perfil</span>

                    </a>
                </li>
                <li>
                    <a href='#' className='item__link'>
                        <img src={Info} alt=''/>
                        <span>Sobre nós</span>

                    </a>
                    </li>
                    <li>
                    <a href='#'className='item__link'>
                        <img src={Logout} alt=''/>
                        <span>Sair</span>

                    </a>
                
                </li>
            </ul>
        </nav>
    </aside>
    )
}