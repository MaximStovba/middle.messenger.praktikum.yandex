import { get } from './get';

export class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  private _template: string;

  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: object) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate = (ctx: object) => {
    let tmpl = this._template;
    let dataArray = null;
    const regExp = this.TEMPLATE_REGEXP;

    while ((dataArray = regExp.exec(this._template)) !== null) {
      if (dataArray[1]) {
        const tmplValue = dataArray[1].trim();
        const data = get(ctx, tmplValue);

        if (typeof data === 'function') {
          tmpl = tmpl.replace(
            new RegExp(dataArray[0], 'gi'),
            `${dataArray[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(dataArray[0], 'gi'), data);
      }
    }
    return tmpl;
  };
}
