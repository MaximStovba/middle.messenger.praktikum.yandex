import { Block } from './block';
import { Route } from './route';
import { Store } from './store';

const store = new Store();
const appStore = store.getState();

export class Router {
  routes: Route[];
  history: History;
  private _currentRoute: null | Route;
  private _rootQuery: string;
  static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event: {
      currentTarget: { location: { pathname: string } };
    }) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    if (!appStore.isLogin) {
      if (window.location.pathname === '/') {
        this._onRoute(window.location.pathname);
      } else if (window.location.pathname === '/sign-up') {
        this._onRoute(window.location.pathname);
      } else {
        this._onRoute('/');
      }
    } else {
      this._onRoute(window.location.pathname);
    }
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      this.go('/404');
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(this._currentRoute, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    if (!appStore.isLogin) {
      if (pathname === '/') {
        this._onRoute(pathname);
      } else if (pathname === '/sign-up') {
        this._onRoute(pathname);
      } else {
        this._onRoute('/');
      }
    } else {
      this._onRoute(pathname);
    }
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
