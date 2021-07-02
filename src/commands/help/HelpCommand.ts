import {Message, MessageEmbed} from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import {ReactionMenu} from "../../utils/ReactionMenu";

export default class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'help', "Gives help about command", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const embed = new MessageEmbed().setTitle("Help menu")
    client.commands.forEach(value => {
      embed.addField(`${client.prefix}${value.getName()}`, `\`\`\`${value.getDescription()}\`\`\``)
    })
    await message.reply(embed)
  }
}
