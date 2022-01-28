export type evtType = {
  [key: string]: (e: Event) => void;
};

export interface IProps {
  [key: string]: unknown;
  events?: evtType;
  settings?: Record<string, boolean>;
}

export type WSDataType = {
  type: string;
  content: string;
};

export interface IEvent {
  message: string;
}

export interface IUser {
  first_name?: string;
  id?: number;
}
