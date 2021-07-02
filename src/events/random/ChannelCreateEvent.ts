// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
import { DMChannel, GuildChannel } from 'discord.js';
import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super('channelCreate');
  }

  async run(client: DiscordClient, channel: DMChannel | GuildChannel) {

  }
}
