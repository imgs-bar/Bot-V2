import {
    APIMessageContentResolvable,
    EmojiIdentifierResolvable,
    Message,
    MessageAdditions,
    MessageOptions,
    MessageReaction
} from "discord.js";

export const menus: ReactionMenu[] = [];

export class ReactionMenu {
    messageId: string = ""
    commandMessage: Message
    emojis: EmojiIdentifierResolvable[]
    content: APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions
    reactions: MessageReaction[]
    onReaction: (reaction: MessageReaction) => void;
    creator: string

    constructor(originalMessage: Message, content: APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions, reactions: EmojiIdentifierResolvable[], onReaction: (reaction: MessageReaction) => void) {
        this.content = content;
        this.commandMessage = originalMessage
        this.reactions = []
        this.onReaction = onReaction
        this.emojis = reactions;
        this.creator = originalMessage.author.id
        menus.push(this)
        this.init()
    }

    async init(){
        const message = await this.commandMessage.channel.send(this.content)
        this.messageId = message.id
        for (const value of this.emojis) {
            await message.react(value)
        }
    }

}
