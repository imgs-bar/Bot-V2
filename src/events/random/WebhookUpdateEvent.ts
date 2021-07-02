// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate
import { TextChannel } from 'discord.js';
import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class WebhookUpdateEvent extends BaseEvent {
  constructor() {
    super('webhookUpdate');
  }

  async run(client: DiscordClient, channel: TextChannel) {

  }
}
