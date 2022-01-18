import { IProps } from '../../../../types';
import { ChatDeleteButton } from '../../../chat/components/chat-delete-btn/chat-delete-btn';

export interface IChatUserBoxProps extends IProps {
  userDeleteButton: ChatDeleteButton;
}
