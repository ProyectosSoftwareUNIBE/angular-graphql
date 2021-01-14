import {MessageModel} from './message.model';

export interface Response {
  getMessages: MessageModel[];
}
