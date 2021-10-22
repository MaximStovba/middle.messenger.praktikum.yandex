import { get } from "./get";

export type Context = Record<string, any>;

export class Templator {
  static TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  private _template: string;

  constructor(template: string) {
    this._template = template;
  }

  public compile(ctx: Context): string {
    return this._compileTemplate(ctx);
  }

  private _compileTemplate(ctx: Context): string {
    let tmpl = this._template;
    let dataArray = null;
    const regExp = Templator.TEMPLATE_REGEXP;
    /*eslint no-cond-assign: "error"*/
    while ((dataArray = regExp.exec(this._template)) !== null) {
      if (dataArray[1]) {
        const tmplValue = dataArray[1].trim();
        const data: any = get(ctx, tmplValue);

        if (typeof data === "function") {
          tmpl = tmpl.replace(
            new RegExp(dataArray[0], "gi"),
            `${dataArray[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(dataArray[0], "gi"), data);
      }
    }
    return tmpl;
  }
}
