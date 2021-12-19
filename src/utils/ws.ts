// ws.ts
import { ChatsController } from '../controllers/chats';

const baseWSUrl = 'wss://ya-praktikum.tech/ws/chats';
const chats = new ChatsController();

export enum WS_TYPE {
  MESSAGE = 'message',
  GET_OLD = 'get old',
  PING = 'ping',
}

export class WebSocketApp {
  socket: WebSocket;
  private pingTimerId: any;
  userId: number;
  userName: string;

  constructor(user: any, chatId: number, tokenValue: string) {
    const url = `${baseWSUrl}/${user.id}/${chatId}/${tokenValue}`;
    this.socket = new WebSocket(url);
    this.userId = user.id;
    this.userName = user.first_name;
    this.startListeners();
  }

  send(content: string, type: WS_TYPE) {
    this.socket.send(
      JSON.stringify({
        content,
        type,
      })
    );
  }

  close() {
    this.socket.close();
  }

  private ping() {
    this.pingTimerId = setInterval(() => {
      this.socket.send(
        JSON.stringify({
          type: WS_TYPE.PING,
        })
      );
    }, 10000);
  }

  private startListeners() {
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено...');

      this.send(`${this.userName} в чате!`, WS_TYPE.MESSAGE);

      this.ping();
    });

    this.socket.addEventListener('close', (event) => {
      clearInterval(this.pingTimerId);

      if (event.wasClean) {
        console.log('Соединение закрыто чисто!');
      } else {
        console.log('Обрыв соединения!');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'message') {
        console.log('Получен message', data.content);
        chats.getChats();
      }
      if (data.type === 'pong') {
        console.log('Получен', event.data);
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', (<Event | any>event).message);
    });
  }
}
