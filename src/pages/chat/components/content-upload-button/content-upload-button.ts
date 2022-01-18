import './content-upload-button.scss';
import { contentUploadBtnTempl } from './content-upload-button.tmpl';

import { Templator } from '../../../../utils/templator';
import { Block } from '../../../../utils/block';
import { IContentUploadBtnProps } from './types';

export class ContentUploadButton extends Block<IContentUploadBtnProps> {
  constructor(props: IContentUploadBtnProps) {
    super('button', props, 'content-upload-btn');
  }

  render() {
    const tmpl = new Templator(contentUploadBtnTempl);
    const str = tmpl.compile({});
    return str;
  }
}
