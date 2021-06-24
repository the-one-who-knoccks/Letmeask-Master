/* eslint-disable react/button-has-type */
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import '../../styles/room.scss';

type RoomParamsProps = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParamsProps>(); // Generic

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />
          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça o seu login.</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
