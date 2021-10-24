import { EventBus } from "./event-bus";
// import isEmpty from "./isEmpty";

// import { Templator } from './templator';


export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element = null;
  _meta = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "div", props = {}, className?: string, tamptate?: string) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      className,
      tamptate,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    // const { tagName } = this._meta;
    // this._element = this._createDocumentElement(tagName);
    const { tagName, className } = this._meta;
    this._element = this._createDocumentElement(tagName, className);
    // console.log(this._element)
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

	// Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps) {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    //this._render();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

	// Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _render() {
    const block = this.render();

    // Удалить старые события через removeEventListener

    //const wrapper = document.createElement('div');
    //wrapper.innerHTML = block;
    // const isElementExist = this._element.firstElementChild !== null;

    // if (isElementExist) {
    //   this._element.firstElementChild.replaceWith(block);
    // } else {
    //   this._element.appendChild(block);

    // }
    this._removeEvents();

    this._element.innerHTML = block

    // this._element.innerHTML = block

    // Навесить новые события через addEventListener

    this._addEvents();
  }

  render() {}

  getContent() {
    return this.element;
  }

  getProps() {
    return this.props;
  }

  _makePropsProxy(props) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName, className) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    // return document.createElement(tagName);
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

// export type Property = Record<string, any>;

// export class Block {

//   static EVENTS = {
//     INIT: "init",
//     FLOW_CDM: "flow:component-did-mount",
//     FLOW_CDU: "flow:component-did-update",
//     FLOW_RENDER: "flow:render"
//   };

//   eventBus: EventBus = new EventBus();
//   private _tagName: string;
//   private _element: HTMLElement | null = null;
//   protected props: Property;
//   protected tamplate: string | undefined;

//   constructor(tagName = "div", props: Property, tamplate?: string) {
//     this._tagName = tagName;
//     this.props = this._makePropsProxy(props);
//     this.tamplate = tamplate;
//     // const eventBus = new EventBus();
//     // this.eventBus = () => eventBus;
//     // this._registerEvents(eventBus);
//     //
//     this._registerEvents(this.eventBus);
//     this.eventBus.emit(Block.EVENTS.INIT);
//   }

//   _registerEvents(eventBus: EventBus) {
//     eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
//   }

//   _createResources() {
//     this._element = this._createDocumentElement(this._tagName);
//   }


//   init() {
//     this._createResources();
//     this.eventBus.emit(Block.EVENTS.FLOW_CDM);
//   }


//   _componentDidMount() {
//     this.componentDidMount();
//     this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
//   }

//   componentDidMount() {}

//   _componentDidUpdate(oldProps: Property, newProps: Property) {
//     const response = this.componentDidUpdate(oldProps, newProps);
//     if (!response) {
//       return;
//     }
//     this._render();
//   }

//   componentDidUpdate(oldProps: Property, newProps: Property) {
//     // return JSON.stringify(newProps) !== JSON.stringify(oldProps);
//     return true;
//   }

//   setProps = (nextProps: Property) => {
//     if (!nextProps) {
//       return;
//     }

//     Object.assign(this.props, nextProps);
//   };

//   get element() {
//     return this._element;
//   }

//   _render() {
//     const block = this.render();
//     this._element.append(block);
//   }

//   render() {}

//   getContent() {
//     return this._element;
//   }

//   _makePropsProxy(props: Property) {
//     return new Proxy(props, {
//       get(target, prop: string) {
//         const value = target[prop];
//         return typeof value === "function" ? value.bind(target) : value;
//       },
//       set(target, prop: string, value: unknown) {
//         target[prop] = value;

//         this.eventBus.emit(Block.EVENTS.FLOW_CDU, {...target}, target);
//         return true;
//       },
//       deleteProperty() {
//         throw new Error("Нет доступа");
//       }
//     });
//   }

//   _createDocumentElement(tagName: string) {
//     return document.createElement(tagName);
//   }

//   show() {
//     this.getContent().style.display = "block";
//   }

//   hide() {
//     this.getContent().style.display = "none";
//   }
// }
