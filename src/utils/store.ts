import { EventBus } from './event-bus';

interface State {
  [key: string]: any;
}

const initialState: State = {
  isLogin: false,
};

export class Store {
  static EVENTS = {
    FLOW_SDU: 'flow:store-did-update',
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

  setListener(listener: () => unknown) {
    this.eventBus().on(Store.EVENTS.FLOW_SDU, listener.bind(this));
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
        self.eventBus().emit(Store.EVENTS.FLOW_SDU);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
}
