/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import './styles.scss';

import copyImg from '../../assets/copy.svg';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button onClick={copyRoomCodeToClipboard} className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
