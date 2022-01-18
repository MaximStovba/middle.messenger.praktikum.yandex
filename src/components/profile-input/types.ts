import { IProps } from '../../types';

export interface IProfileInputProps extends IProps {
  title?: string;
  name?: string;
  value?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  validationMsg?: string;
}
