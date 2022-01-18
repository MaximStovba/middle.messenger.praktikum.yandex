import { EventBus } from './event-bus';
import { WebSocketApp } from './ws';

interface State {
  [key: string]: unknown;
  ws?: WebSocketApp;
  isLogin?: boolean;
  chats?: [];
  chatMessages?: [];
  currentChatUsers?: [];
  currentChat?: number | null;
  user?: {
    first_name?: string;
    avatar?: string;
    email?: string;
    login?: string;
    second_name?: string;
    display_name?: string;
    phone?: string;
    id?: number;
  };
}

const initialState: State = {
  isLogin: false,
  chats: [],
  currentChatUsers: [],
  currentChat: null,
  token: null,
  chatMessages: [],
};

export class Store {
  static EVENTS = {
    FLOW_LOGIN_DU: 'flow:login-did-update',
    FLOW_CHATS_DU: 'flow:chats-did-update',
    FLOW_TOKEN_DU: 'flow:token-did-update',
    FLOW_MESSAGES_DU: 'flow:messages-did-update',
  };

  static __instance: Store;
  private eventBus: () => EventBus;
  private _state: State;

  constructor() {
    if (Store.__instance) {
      return Store.__instance;
    }

    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this._state = this._makeStateProxy(initialState);

    Store.__instance = this;
  }

  setListener(listener: () => unknown, action: string) {
    if (action === 'LOGIN') {
      this.eventBus().on(Store.EVENTS.FLOW_LOGIN_DU, listener.bind(this));
    }
    if (action === 'CHATS') {
      this.eventBus().on(Store.EVENTS.FLOW_CHATS_DU, listener.bind(this));
    }
    if (action === 'TOKEN') {
      this.eventBus().on(Store.EVENTS.FLOW_TOKEN_DU, listener.bind(this));
    }
    if (action === 'MESSAGES') {
      this.eventBus().on(Store.EVENTS.FLOW_MESSAGES_DU, listener.bind(this));
    }
  }

  getState() {
    return this._state;
  }

  setState(nextState: State) {
    if (!nextState) {
      return;
    }
    Object.assign(this._state, nextState);
  }

  _makeStateProxy(state: State): State {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return new Proxy(state, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value: unknown) {
        target[prop] = value;
        if (prop === 'isLogin' || prop === 'user') {
          self.eventBus().emit(Store.EVENTS.FLOW_LOGIN_DU);
        }
        if (prop === 'chats') {
          self.eventBus().emit(Store.EVENTS.FLOW_CHATS_DU);
        }
        if (prop === 'currentChatUsers') {
          self.eventBus().emit(Store.EVENTS.FLOW_CHATS_DU);
        }
        if (prop === 'currentChat') {
          self.eventBus().emit(Store.EVENTS.FLOW_CHATS_DU);
        }
        if (prop === 'token') {
          self.eventBus().emit(Store.EVENTS.FLOW_TOKEN_DU);
        }
        if (prop === 'chatMessages') {
          self.eventBus().emit(Store.EVENTS.FLOW_MESSAGES_DU);
        }
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
}
