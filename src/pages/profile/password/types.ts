import { IProps } from '../../../types';
import { ProfileInput } from '../../../components/profile-input/profile-input';
import { ProfileButtonBack } from '../../../components/profile-button-back/profile-button-back';
import { Button } from '../../../components/button/button';

export interface IPasswordProps extends IProps {
  oldPassword?: ProfileInput;
  newPassword?: ProfileInput;
  backButton?: ProfileButtonBack;
  saveButton?: Button;
  nameAvatar?: string;
  urlAvatar?: string;

}
