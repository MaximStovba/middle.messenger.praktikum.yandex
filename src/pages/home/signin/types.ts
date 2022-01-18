import { IProps } from '../../../types';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';

export interface ISigninProps extends IProps {
  name: string
  login: Input
  password: Input
  button: Button
}
