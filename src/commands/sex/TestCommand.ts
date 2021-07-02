import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import {ReactionMenu} from "../../utils/ReactionMenu";

export default class TestCommand extends BaseCommand {
  constructor() {
    super('sex', 'sex', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    new ReactionMenu(message, "Do you like pringle's sex?", ['✅', '❌'],async reaction => {
      message = reaction.message
      if(reaction.emoji.name == '✅'){
        await message.edit('You clicked yes')
      }
      else{
        await message.edit('You clicked no')
      }
    })
  }
}
