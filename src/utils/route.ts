import { Block } from './block';
import { render } from "./render";
import { isEqual } from "./isEqual";

type Property = Record<string, any>;

export class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block | null;
  private _props: Property;

  constructor(pathname: string, view: typeof Block, props: Property) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render(route?: Route, pathname?: string) {
    if (route) {
      console.log(pathname);
      this._block = new route._blockClass();
      render(route._props.rootQuery, route._block);
      return;
    }
    
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
