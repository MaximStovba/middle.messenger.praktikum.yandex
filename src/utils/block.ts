import { EventBus } from "./event-bus";

export type Property = Record<string, any>;

export class Block {
  eventBus: () => EventBus;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };
  _tagName: string;
  _element: HTMLElement | null = null;
  props: Property;
  tamplate: string | undefined;

  constructor(tagName = "div", props: Property, tamplate?: string) {
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    this._tagName = tagName;
    this.props = this._makePropsProxy(props);
    this.tamplate = tamplate;
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  private _createResources() {
    this._element = this._createDocumentElement(this._tagName);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(oldProps: Property, newProps: Property) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _render() {
    const block = this.render();
    this._element && this._element.append(block);
  }

  private _makePropsProxy(props: Property) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  public init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  public getContent() {
    return this._element;
  }


  public componentDidMount() {
    return true;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  public componentDidUpdate(_oldProps: Property, _newProps: Property) {
    return true;
  }


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public render(): any {}

  public setProps = (nextProps: Property) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };
}
