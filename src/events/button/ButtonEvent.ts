import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';
import {menus} from "../../utils/ReactionMenu";
import {MessageComponent} from 'discord-buttons'
export default class ButtonEvent extends BaseEvent {
  constructor() {
    super('clickButton');
  }

  async run(client: DiscordClient, button: MessageComponent) {
    if(button.id === 'happy_cat'){
      await button.reply.send('😺', true)
    }
    else if (button.id === 'mad_cat'){
      await button.reply.send('<:ragecat:853330321277714523>', true)
    }
  }
}
