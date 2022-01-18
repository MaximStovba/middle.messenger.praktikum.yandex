import { IProps } from '../../../../types';
import { ChatDeleteButton } from '../../../chat/components/chat-delete-btn/chat-delete-btn';

export interface IChatCardProps extends IProps {
  chatDeleteButton: ChatDeleteButton;
  last_message: {
    content: string;
    time: Date;
  };
}
