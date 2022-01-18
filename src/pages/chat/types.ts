import { IProps } from '../../types';
import { ChatCardList } from './components/chat-card-list/chat-card-list';
import { ChatUserList } from './components/chat-user-list/chat-user-list';
import { MessageList } from './components/message-list/message-list';
import { ChatEmptyMsg } from './components/chat-empty-msg/chat-empty-msg';
import { SendMsgInput } from './components/send-msg-input/send-msg-input';
import { SendMsgButton } from './components/send-msg-button/send-msg-button';
import { ContentUploadButton } from './components/content-upload-button/content-upload-button';
import { BtnMenuChat } from './components/btn-menu-chat/btn-menu-chat';
import { AddUserButton } from './components/add-user-button/add-user-button';
import { PopupWithForm } from '../../components/popup-with-form/popup-with-form';

export interface IChatProps extends IProps {
  chatCardList: ChatCardList;
  chatUserList: ChatUserList;
  messageList: MessageList;
  chatEmptyMsg: ChatEmptyMsg;
  message: SendMsgInput;
  sendButton: SendMsgButton;
  contentUploadButton: ContentUploadButton;
  openPopupNewChatBtn: BtnMenuChat;
  backToProfileBtn: BtnMenuChat;
  addUserButton: AddUserButton;
  popupAddChat: PopupWithForm;
  popupAddUser: PopupWithForm;
}
