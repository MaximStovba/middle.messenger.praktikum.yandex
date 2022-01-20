import { IProps } from '../../types';

export interface IInputProps extends IProps {
  title: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  validationMsg?: string;
}
