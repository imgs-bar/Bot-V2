import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import {MessageButton, MessageActionRow} from 'discord-buttons'
export default class CatCommand extends BaseCommand {
  constructor() {
    super('cat', 'cat',"mad cat or happy cat", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const button = new MessageButton().setID('mad_cat').setStyle('red').setLabel('click for mad cat').setEmoji('853330321277714523')
    const button2 = new MessageButton().setID('happy_cat').setStyle('green').setLabel('click for happy cat').setEmoji('😺')
    const buttonRow = new MessageActionRow().addComponents(button, button2)

    message.channel.send('Choose wisely', buttonRow);
  }
}
