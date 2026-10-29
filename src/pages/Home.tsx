import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {

    const navigate = useNavigate();
    const [error,setError] = useState('');
    const {user, signInWithGoogle} = useAuth();

    const handleCreateRoom = async () => { try {setError('');if(!user)await signInWithGoogle();navigate('/rooms/new');}catch(error){setError(error instanceof Error ? error.message : 'Não foi possível entrar.');} };


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt='ilustraÃ§Ã£o de perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dÃºvidas da sua audiÃªncia em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='letmeask' />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt='Logo do Google' />
                        Crie sua sala com o google
                    </button>
                    <div className='separetor'>Ou entre em uma sala</div>
                    {error && <p role='alert'>{error}</p>}
                    <form onSubmit={event=>{event.preventDefault();setError('Entrada em salas ainda não implementada neste protótipo.');}}>
                        <input
                            type='text'
                            placeholder='Digite o cÃ³digo da sala'
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
