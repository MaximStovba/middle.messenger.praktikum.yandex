import "./500.scss";
import { render } from "../../utils/render";
import { Templator } from "../../utils/templator";
import { err500Templ } from "./500.tmpl";
import { Block } from "../../utils/block";

export class Err500 extends Block {
  constructor() {
    super(
      "section",
      {},
      "page-500"
    );
  }

  render() {
    const tmpl = new Templator(err500Templ);
    const str = tmpl.compile({});
    return str.firstChild;
  }
}

const err500 = new Err500();
render(".root", err500);
