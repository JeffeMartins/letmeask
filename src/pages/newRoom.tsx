import { Link } from 'react-router-dom';
import {useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

    const { user } = useAuth();
    const [message,setMessage]=useState('');

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
                    <h2>Criar uma nova sala</h2>
                    <p>{user ? `Olá, ${user.name}` : 'Entre pela página inicial para criar uma sala.'}</p>{message && <p role='status'>{message}</p>}<form onSubmit={event=>{event.preventDefault();setMessage('Persistência de salas ainda não implementada neste protótipo.');}}>
                        <input
                            type='text'
                            placeholder='Nome da sala'
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?<Link to="/"> Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
