// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
import { Message } from 'discord.js';
import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }

  async run(client: DiscordClient, message: Message) {

  }
}
