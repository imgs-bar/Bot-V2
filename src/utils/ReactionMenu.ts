import {
  EmojiIdentifierResolvable,
  Message,
  MessageAdditions,
  MessageOptions,
  MessagePayload,
  MessageReaction,
} from 'discord.js';

export const menus: ReactionMenu[] = [];

export class ReactionMenu {
  messageId: string = '';
  commandMessage: Message;
  emojis: EmojiIdentifierResolvable[];
  content: string | MessagePayload | MessageOptions;
  reactions: MessageReaction[];
  onReaction: (reaction: MessageReaction) => void;
  creator: string;

  constructor(
    originalMessage: Message,
    content: string | MessagePayload | MessageOptions,
    reactions: EmojiIdentifierResolvable[],
    onReaction: (reaction: MessageReaction) => void
  ) {
    this.content = content;
    this.commandMessage = originalMessage;
    this.reactions = [];
    this.onReaction = onReaction;
    this.emojis = reactions;
    this.creator = originalMessage.author.id;
    menus.push(this);
    this.init();
  }

  async init() {
    const message = await this.commandMessage.channel.send(this.content);
    this.messageId = message.id;
    for (const value of this.emojis) {
      await message.react(value);
    }
  }
}
