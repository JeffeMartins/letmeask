import { useHistory } from 'react-router';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';

export function Home() {

    const history = useHistory();

    const navigateToNewRoom = () => {

        history.push('/rooms/new');
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt='ilustração de perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='letmeask' />
                    <button onClick={navigateToNewRoom} className='create-room'>
                        <img src={googleIconImg} alt='Logo do Google' />
                        Crie sua sala com o google
                    </button>
                    <div className='separetor'>Ou entre em uma sala</div>
                    <form>
                        <input
                            type='text'
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}