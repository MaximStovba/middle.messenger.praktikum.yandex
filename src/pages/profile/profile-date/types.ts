import { IProps } from '../../../types';
import { ProfileInput } from '../../../components/profile-input/profile-input';
import { ProfileButton } from '../../../components/profile-button/profile-button';
import { ProfileButtonBack } from '../../../components/profile-button-back/profile-button-back';
import { ProfilePatchavatarButton } from '../../../components/profile-patchavatar-btn/profile-patchavatar-btn';
import { PopupWithForm } from '../../../components/popup-with-form/popup-with-form';
import { Button } from '../../../components/button/button';

export interface IProfileDateProps extends IProps {
  email?: ProfileInput;
  login?: ProfileInput;
  firstName?: ProfileInput;
  secondName?: ProfileInput;
  nickName?: ProfileInput;
  phone?: ProfileInput;
  editDataButton?: ProfileButton;
  editPasswordButton?: ProfileButton;
  exitButton?: ProfileButton;
  backButton?: ProfileButtonBack;
  saveButton?: Button;
  nameAvatar?: string;
  urlAvatar?: string;
  patchavatarButton?: ProfilePatchavatarButton;
  popupAddAvatar?: PopupWithForm;
}
