// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
import { Guild } from 'discord.js';
import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super('guildDelete');
  }

  async run(client: DiscordClient, guild: Guild) {

  }
}
