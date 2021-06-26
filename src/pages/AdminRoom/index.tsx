/* eslint-disable no-alert */
/* eslint-disable no-useless-return */
/* eslint-disable react/button-has-type */
// import { FormEvent, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import deleteImg from '../../assets/delete.svg';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';

import { useRoom } from '../../hooks/userRoom';

import './styles.scss';
import { database } from '../../services/firebase';

type RoomParamsProps = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParamsProps>(); // Generic
  const history = useHistory();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button onClick={handleEndRoom} isOutlined>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                content={question.content}
                key={question.id}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
