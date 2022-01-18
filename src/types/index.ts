export type evtType = {
  [key: string]: (e: Event) => void;
};

export interface IProps {
  [key: string]: unknown;
  events?: evtType;
  settings?: Record<string, boolean>;
}
