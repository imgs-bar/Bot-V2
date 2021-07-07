import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';
import {ButtonInteraction, Interaction} from 'discord.js';
export default class ButtonEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }

  async run(client: DiscordClient, button: Interaction) {
    if (button instanceof ButtonInteraction) {
      if (button.customId === 'happy_cat') {
        await button.reply({content: '😺', ephemeral: true});
      } else if (button.id === 'mad_cat') {
        await button.reply({
          content: '<:ragecat:853330321277714523>',
          ephemeral: true,
        });
      }
    }
  }
}
