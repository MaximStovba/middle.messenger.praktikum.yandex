import { EventBus } from "./event-bus";

export type Property = Record<string, any>;

export type TMeta = {
  tagName: string;
  props: Property;
  className?: string;
}

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  private _element: HTMLElement;

  private _meta: TMeta;

  protected props: any;

  private eventBus: () => EventBus;

  constructor(tagName = "div", props = {}, className?: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      className,
    };


    this.props = this._makePropsProxy(props);

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

  _addEvents() {
    const self = this;
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      self._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    // const {events = {}} = this.props;

    // Object.keys(events).forEach(eventName => {
    //   this._element.removeEventListener(eventName, events[eventName]);
    // });
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

  render() {
    const { tagName } = this._meta;
    const element = document.createElement(tagName);
    return element
  }

  getContent() {
    return this.element;
  }

  getProps() {
    return this.props;
  }

  _makePropsProxy(props: Property) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value: unknown) {
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string, className?: string) {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
