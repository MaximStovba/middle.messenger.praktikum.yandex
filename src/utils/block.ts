import { EventBus } from './event-bus';
import { v4 as makeUUID } from 'uuid';
import { IProps } from '../types';


export class Block<Property extends IProps> {
  static hide() {
    throw new Error('Method not implemented.');
  }
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement;

  private _meta: {
    tagName: string;
    props: Property;
    className?: string;
  };

  _id: string;

  props: Property;

  private eventBus: () => EventBus;

  constructor(tagName = 'div', props: Property, className?: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      className,
    };

    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName, className } = this._meta;
    this._element = this._createDocumentElement(tagName, className);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps: Property, newProps: Property) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(_oldProps: Property, _newProps: Property) {
    return true;
  }

  setProps = (nextProps: Property) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _bindEvent(e: Event, eventFn: (e: Event) => void) {
    const target = e.target as HTMLElement;
    const dataId = target.getAttribute('data-id');
    if (target != null) {
      if (dataId === this._id) {
        e.preventDefault();
        eventFn.bind(this);
        eventFn(e);
      }
    }
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      document.querySelector('.root')?.addEventListener(
        eventName,
        (evt) => {
          this._bindEvent(evt, events[eventName]);
        },
        true
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      document.querySelector('.root')?.removeEventListener(eventName, (evt) => {
        this._bindEvent(evt, events[eventName]);
      });
    });
  }

  _render() {
    const block = this.render();

    this._removeEvents();

    if (block) {
      const isElExist = this._element?.firstElementChild !== null;
      if (isElExist) {
        this._element.firstElementChild?.replaceWith(block);
      } else {
        this._element.appendChild(block);
      }
    }

    this._addEvents();
  }

  render(): ChildNode | null {
    const { tagName } = this._meta;
    const element = document.createElement(tagName);
    return element;
  }

  getContent() {
    return this.element;
  }

  getContentAsString(): string {
    return this.element.outerHTML;
  }

  getProps() {
    return this.props;
  }

  getInternalID() {
    return this._id;
  }

  _makePropsProxy(props: Property) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value: unknown) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string, className?: string) {
    const { settings } = this.props;
    const element = document.createElement(tagName);
    if (settings && settings.withInternalID) {
      element.setAttribute('data-id', this._id);
    }
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
