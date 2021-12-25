import "./404.scss";
import { render } from "../../utils/render";
import { Templator } from "../../utils/templator";
import { err404Templ } from "./404.tmpl";
import { Block } from "../../utils/block";

export class Err404 extends Block {
  constructor() {
    super(
      "section",
      {},
      "page-404"
    );
  }

  render() {
    const tmpl = new Templator(err404Templ);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const err404 = new Err404();
render(".root", err404);
