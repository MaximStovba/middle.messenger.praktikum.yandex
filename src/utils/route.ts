import { Block } from './block';
import { render } from './render';
import { isEqual } from './isEqual';
import { IProps } from '../types';

type Property = Record<string, any>;

export class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block<IProps> | null;
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

  render(route?: Route, _pathname?: string) {
    if (route) {
      this._block = new route._blockClass('div', {});
      render(route._props.rootQuery, this._block);
      return;
    }

    if (!this._block) {
      this._block = new this._blockClass('div', {});
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
