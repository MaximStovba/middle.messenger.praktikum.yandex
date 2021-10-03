import { get } from './get';

export class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate = (ctx) => {
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
