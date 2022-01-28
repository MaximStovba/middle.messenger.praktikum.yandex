import { IProps } from '../../../types';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';

export interface ISignupProps extends IProps {
  name: string
  firstName: Input
  secondName: Input
  login: Input
  email: Input
  password: Input
  phone: Input
  button: Button
}
