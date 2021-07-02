import BaseEvent from '../../utils/structures/BaseEvent';
import {Message, MessageReaction, User} from 'discord.js';
import DiscordClient from '../../client/client';
import {menus} from "../../utils/ReactionMenu";

export default class ReactionEvent extends BaseEvent {
  constructor() {
    super('messageReactionAdd');
  }

  async run(client: DiscordClient, messageReaction: MessageReaction, user: User) {
    if (user.bot) return;
    const menu = menus.find(value => value.messageId === messageReaction.message.id)
    if(menu){
      menu.reactions.push(messageReaction)
      menu.onReaction(messageReaction)
    }
  }
}
