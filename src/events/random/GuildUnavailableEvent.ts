// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable
import { Guild } from 'discord.js';
import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super('guildUnavailable');
  }

  async run(client: DiscordClient, guild: Guild) {

  }
}
